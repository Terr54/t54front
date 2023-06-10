import type { LazyExoticComponent, ReactNode } from 'react'
import type { Location } from 'react-router-dom'
import type { AppDispatch } from '../store'

export interface GuardPropType {dispatch: AppDispatch, location: Location}
export type GuardFunc = (props: GuardPropType) => string | boolean
export type LazyType = LazyExoticComponent<() => JSX.Element>
export interface LayoutProps {
  children: ReactNode | ReactNode[]
  navbar?: ReactNode,
  sidebar?: ReactNode
  footer?: ReactNode
}
export interface RouteType {
  path: string
  component: LazyExoticComponent<() => JSX.Element>
  guards?: GuardFunc[]
  layout?: (props: LayoutProps) => JSX.Element
  children?: RouteType[]
}
export interface ShieldCredsType {
  email: string
  password: string
}
export interface ShieldRegisterType {
  email: string
  password: string
  firstName: string
  lastName: string
}
export interface ShiedSocialCredsType {
  credentials: string
}
export interface ForgotPasswordPropType {
  email: string
}
export interface ResetPasswordPropType {
  userId: string
  passwordResetId: string
  password: string
}

export interface UpdateUserPropType {
  firstName?: string
  lastName?: string
  phone?: string
  picture?: string
  address?: string
  longitude?: number
  latitude?: number
  socialLinks?: Record<string, string>
  documentLinks?: Record<string, string>
}

export interface BaseEntity {
  id: string;
  version: number;
}

export interface BaseEntityWithBasicAudit extends BaseEntity {
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseEntityWithCreatorAudit extends BaseEntityWithBasicAudit {
  userId: string;
}

export interface BaseSerialEntity {
  id: number;
  version: number;
}

export interface BaseSerialEntityWithBasicAudit extends BaseSerialEntity {
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseSerialEntityWithCreatorAudit extends BaseSerialEntityWithBasicAudit {
  userId: string;
}

export interface Account extends BaseSerialEntityWithCreatorAudit {
  currentBalance: number;
  availableBalance: number;
  accountType: string;
  billingAddresses: JsonBWrapper<BillingAddress[]>;
  withdrawalOpen: boolean;
  closed: boolean;
}

export interface AccountType {
  id: string;
  minimumRequiredBalance: number;
  payingInterest: boolean;
}

export interface BillingAddress {
  scope: string;
  email: string;
  name: string;
}
export interface App extends BaseEntityWithCreatorAudit {
  name: string;
  logoUrl: string;
  callbackUrl: string;
  email: string;
  password: string;
  roleId: string;
}

export interface Authority {
  id: string;
}

export interface Invitation extends BaseEntityWithCreatorAudit {
  activity: string;
  email: string;
}

export interface Role extends BaseEntity {
  name: string;
  authorities: string[];
  accountAuthorities: { [index: string]: string[] };
  description: string;
}

export interface SupplierProfile extends BaseEntity {
  merchantName: string;
  phone: string;
  picture: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
  postalCode: string;
  longitude: number;
  latitude: number;
  documentLinks: JsonBWrapper<{ [index: string]: string }>;
  userId: string;
  invitedBy: string;
}

export interface User extends BaseEntityWithBasicAudit {
  email: string;
  roleId: string;
  emailVerifiedAt: Date;
}

export interface UserProfile extends BaseEntity {
  firstName: string;
  lastName: string;
  phone: string;
  picture: string;
  address: string;
  longitude: number;
  latitude: number;
  username: string;
  documentLinks: JsonBWrapper<{ [index: string]: string }>;
  userId: string;
}

export interface Document {
  src: string;
  mediaType: string;
}

export interface DocumentDescription {
  description: string;
  mediaTypes: string[];
}

export interface JsonBWrapper<T> {
  value: T;
}

export interface ActivityLog extends BaseEntityWithCreatorAudit {
  userAgent: string;
  ipAddress: string;
  endPoint: string;
  tag: string;
  method: string;
  queryString: string;
}

export interface EmailAddress {
  address: string;
  personal: string;
}

export interface ListRequest<T> {
  list: T[];
}

export interface SingleValueRequest<T> {
  value: T;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface SignUpSupplierRequest {
  email: string;
  password: string;
  merchantName: string;
  phone: string;
  longitude: number;
  latitude: number;
}

export interface SignUpUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ApiException {
  code: string;
  message: string;
  status: string;
}
export interface ApiError {
  code: string;
  message: string;
}
export interface ApiValidationException extends ApiError {
  field: string;
}
export type ApiErrors = ApiError | ApiException | ApiValidationException;
export interface ApiResponse<T> {
  content: T;
  errors: ApiErrors[];
}

export interface JWTResponse {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  expiresIn: number;
}
export interface SupplierInviteRequest {
  emailList: string[];
  message: string;
}
export interface Category {
  id: string;
}

export interface Tag {
  id: string;
}

export interface Filter<T, V = unknown> {
  name: string,
  test: (item: T, v?: V) => boolean;
}
export type StockFilterName = 'all' | 'verified' | 'unverified';

declare global {
  interface Window {
    LOGS: string[]
    logger: {
      tag: (tag: string, color?: string) => ({ log: (message?: string, ...args: any) => void })
    }
    FB: any
    google: any
    fbAsyncInit: () => void
    setDebug: () => void
  }
  let logger: {
    tag: (tag: string, color?: string) => ({ log: (message?: string, ...args: any) => void })
  };
}
