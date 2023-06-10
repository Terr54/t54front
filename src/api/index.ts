import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import appConfig, { serverConfig } from '../config'
import {
  clearLocalUser,
  clearTokens,
  getExpiresAt,
  getJWT,
  getRefreshToken,
  setExpiresInSeconds,
  setJWT,
  setRefreshToken
} from '../storage/local.storage'
import { ApiResponse, JWTResponse } from '../types'
import type { AuthUrlType } from './urls'
import { securityUrls } from './urls'

export const backend = axios.create()
export const shield = axios.create()

const prepareUrl = (url: string) => ((url?.startsWith('/')) ? url.substring(1) : url)

shield.interceptors.request.use((config: AxiosRequestConfig): any => ({
  ...config,
  url: `${appConfig?.shield.server_url}/${prepareUrl(config.url ?? '')}`,
  headers: {
    ...(config?.headers ?? {}),
    'x-app-auth': `Basic ${btoa(
			`${serverConfig.t54.key}:${serverConfig.t54.secret}`
		)}`
  }
}))

backend.interceptors.request.use((config: AxiosRequestConfig): any => ({
  ...config,
  url: `${appConfig?.t54.server_url}/api/v1/${prepareUrl(config.url ?? '')}`,
  headers: {
    'x-portal-auth': `Basic ${btoa(
			`${serverConfig.t54.key}:${serverConfig.t54.secret}`
		)}`,
    authorization: `Bearer ${getJWT()}`,
    ...(config?.headers ?? {})
  }
}))

export const isTokenNearExpiry = () => {
  const nearExp = 15 * 60 * 1000
  return (Number(getExpiresAt()) - Date.now()) <= nearExp
}

export const refreshJwt = async () => await new Promise(resolve => {
  const refreshToken = getRefreshToken()
  if (refreshToken) {
    axios.post<ApiResponse<JWTResponse>>(
			`${appConfig?.t54.server_url}/api/v1/${prepareUrl(securityUrls.auth.TOKEN_REFRESH)}`,
			{ value: refreshToken },
			{
			  headers: {
			    'x-app-auth': `Basic ${btoa(
						`${serverConfig.t54.key}:${serverConfig.t54.secret}`
					)}`
			  }
			}
    )
      .then(res => {
        const t = res?.data?.content;
        setJWT(t?.accessToken)
        setRefreshToken(t?.refreshToken)
        setExpiresInSeconds(t?.expiresIn)
        resolve(true)
      })
      .catch(
        e => {
          if (e?.response?.data) {
            clearTokens()
            clearLocalUser()
          }

          resolve(false)
        }
      )
  } else {
    resolve(false)
  }
})

const refreshInterceptor = (config: AxiosRequestConfig): any => {
  if (typeof securityUrls.auth[config.url as AuthUrlType] === 'undefined') {
    if (isTokenNearExpiry()) {
      void refreshJwt()
    }
  }

  return config
}

backend.interceptors.request.use(refreshInterceptor)
export interface ProgressEventData {
  readonly lengthComputable: boolean
  readonly loaded: number
  readonly total: number
}
export interface BuketUploadResponse {
  url: string
  authenticatedUrl: string
  mimeType: string
  fileName: string
  encoding: string
  relativePath: string
  size: number
}
const upload = async (url: string, file: File) => {
  const data = new FormData()
  data.append('file', file)
  return await axios.post<FormData, AxiosResponse<BuketUploadResponse>>(`${appConfig.file_uploads.server_url}/${url}`, data)
}

export const publicBucket = async (file: File, path?: string) => await upload(path ? `?path=${path}` : '', file)
export const protectedBucket = async (file: File, path?: string) => await upload(path ? `protected?path=${path}` : 'protected', file)
