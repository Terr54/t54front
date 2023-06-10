import { AuthUserResponse } from '../../domain/domain'
import { getLocalUser } from '../../storage/local.storage'
import type { GuardFunc, GuardPropType } from '../../types'

export const guest = (props: GuardPropType) => {
  console.log(props)
  return '/'
}
export const createAuthorityGaurd = (authorities: string[]): GuardFunc => {
  return (props: GuardPropType) => {
    const user: AuthUserResponse = getLocalUser();
    return authorities.some(a => user.role.authorities.includes(a));
  }
};
