export const securityUrls = {
  auth: {
    SIGNUP: '/public/iam/user',
    SIGNUP_SUPPLIER: '/public/iam/user/supplier',
    TOKEN: '/public/iam/user/login',
    TOKEN_REFRESH: '/public/iam/user/token/refresh',
    GOOGLE: '/u/social/auth/google',
    FACEBOOK: '/u/social/auth/facebook',
    PHONE: '/u/social/auth/phone',
    FORGOT_PASSWORD: '/u/password/forgot',
    RESET_PASSWORD: '/u/password/reset'
  }
}

export const backendUrls = {
  users: {
    REGISTER: '/public/iam/user/register',
    UPDATE: '/user/details',
    DETAILS: '/iam/user',
    INVITE_SUPPLIER: '/iam/user/supplier/invite',
    LIST_INVITATIONS: '/iam/user/supplier/invitations',
    UPLOAD_PROFILE_PICTURE: '/iam/user/picture',
    $ATTACH_PROFILE_PICTURE: (id: string) => `/iam/user/picture/${id}`,
    LIST_SUPPLIERS: '/iam/user/supplier'
  },
  product: {
    CATEGORIES: '/public/product/categories',
    CREATE: '/product',
    LIST_SUPPLYING: '/product/supplies',
    DETAILS: '/product/details',
    MEDIA: '/product/media',
    $ATTACH_MEDIA: (productId: string) => `product/${productId}/media`,
    INVENTORY: '/product/inventory',
    $PUBLISH_INVENTORY: (id: number) => `/product/inventory/${id}/publish`,
    $VERIFY_INVENTORY: (id: number) => `/product/inventory/${id}/verify`,
    $GET: (id: string) => `/product/${id}`,
    LIST_STOCK_PENDING_VERIFICATION: '/product/verification/stocks',
    public: {
      $GET: (id: string) => `/public/product/${id}`,
      AVAILABLE: '/public/product/available',
      REQUEST_A_SAMPLE: '/public/product/request/sample'
    }
  },
  media: {
    ALL: '/media'
  },
  newsletter: {
    subscribe: '/public/newsletter/subscribe',
    subscriptions: '/newsletter/subscriptions'
  }
}

export const fileUploadsUrls = {
  UPLOAD: '/files/upload'
}

export type AuthUrlType = keyof typeof securityUrls.auth
export type UserUrlType = keyof typeof backendUrls.users
