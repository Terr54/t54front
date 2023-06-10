import { shield, backend } from '../../../api'
import { securityUrls, backendUrls as appUrls } from '../../../api/urls'
import { AuthUserResponse, Place, SignUpSupplierRequest } from '../../../domain/domain';
import type {
  ApiResponse,
  ForgotPasswordPropType,
  LoginUserRequest,
  ResetPasswordPropType,
  ShiedSocialCredsType,
  ShieldRegisterType,
  UpdateUserPropType
} from '../../../types'

export const register = async () => await backend.post(appUrls.users.REGISTER, {}).then(
  res => res?.data
)
export const signUp = async ({
  email, password, lastName, firstName
}: ShieldRegisterType) => await backend.post<ApiResponse<AuthUserResponse>>(
  securityUrls.auth.SIGNUP,
  {
    email, password, firstName, lastName
  }
);
export const signUpSupplier = async (request: Omit<SignUpSupplierRequest, 'place'> & {
  place?: Partial<Place>
}) => await backend.post<ApiResponse<AuthUserResponse>>(
  securityUrls.auth.SIGNUP_SUPPLIER,
  request
);
export const signIn = async ({ email, password }: LoginUserRequest) => await backend.post<ApiResponse<AuthUserResponse>>(
  securityUrls.auth.TOKEN,
  { email, password }
);
export const googleAuth = async ({ credentials }: ShiedSocialCredsType) => await shield.post(
  securityUrls.auth.GOOGLE,
  { credentials }
).then(res => res?.data)
export const facebookAuth = async ({ credentials }: ShiedSocialCredsType) => await shield.post(
  securityUrls.auth.FACEBOOK,
  { credentials }
).then(res => res?.data)
export const phoneAuth = async ({ credentials }: ShiedSocialCredsType) => await shield.post(
  securityUrls.auth.PHONE,
  { credentials }
).then(res => res?.data)
export const forgotPassword = async ({ email }: ForgotPasswordPropType) => await shield.post(
  securityUrls.auth.FORGOT_PASSWORD,
  { email }
).then(res => res?.data)
export const resetPassword = async ({
  userId,
  passwordResetId,
  password
}: ResetPasswordPropType) => await shield.post(
  securityUrls.auth.RESET_PASSWORD,
  { userId, passwordResetId, password }
).then(res => res?.data)

export const getUserInfo = async () => await backend.get<ApiResponse<AuthUserResponse>>(appUrls.users.DETAILS, {});

export const updateUserInfo = async (
  data: UpdateUserPropType
) => await backend.post(appUrls.users.UPDATE, data, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}).then(res => res?.data).catch(err => {
  console.log(`Erro here ${JSON.stringify(err.response)}`)
})
