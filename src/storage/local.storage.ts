const JWT = btoa('t54-k-0001');
const REFRESH_TOKEN = btoa('t54-k-0002');
const EXPIRES_IN_SECONDS = btoa('t54-k-0003');
const EXPIRES_AT = btoa('t54-k-00895');
const USER = btoa('t54-k-0004');
const LANGUAGE = btoa('t54-k-0005');

export const REFS = {
  JWT,
  REFRESH_TOKEN,
  EXPIRES_IN_SECONDS,
  EXPIRES_AT,
  USER,
  LANGUAGE
}

export const setJWT = (jwtStr: string) => {
  localStorage.setItem(REFS.JWT, jwtStr)
}

export const getJWT = () => localStorage.getItem(REFS.JWT)

export const setRefreshToken = (rStr: string) => {
  localStorage.setItem(REFS.REFRESH_TOKEN, rStr)
}

export const getRefreshToken = () => localStorage.getItem(REFS.REFRESH_TOKEN)

export const setExpiresInSeconds = (exp: number) => {
  localStorage.setItem(REFS.EXPIRES_AT, (Date.now() + (exp * 1000)).toString())
  localStorage.setItem(REFS.EXPIRES_IN_SECONDS, exp.toString())
}

export const getExpiresInSeconds = () => localStorage.getItem(REFS.EXPIRES_IN_SECONDS)

export const getExpiresAt = () => localStorage.getItem(REFS.EXPIRES_AT)

export const setLocalUser = (user: any) => {
  localStorage.setItem(REFS.USER, JSON.stringify(user))
}

export const clearLocalUser = () => {
  localStorage.removeItem(REFS.USER)
}

export const clearTokens = () => {
  localStorage.removeItem(REFS.EXPIRES_IN_SECONDS)
  localStorage.removeItem(REFS.JWT)
  localStorage.removeItem(REFS.REFRESH_TOKEN)
  localStorage.removeItem(REFS.EXPIRES_AT)
}

export const getLocalUser = () => {
  try {
    const user = localStorage.getItem(REFS.USER)
    return user === null ? null : JSON.parse(user)
  } catch (e) {
    if ((window as any).DEBUG_APP) {
      console.error(e)
    }

    return null
  }
}

export const setLanguage = (lang: string) => {
  localStorage.setItem(REFS.LANGUAGE, lang)
}

export const getLanguage = () => localStorage.getItem(REFS.LANGUAGE)

export const isDebug = () => localStorage.getItem('IS_DEBUG_SET') === 'true';
export const setDebug = () => localStorage.setItem('IS_DEBUG_SET', 'true');
