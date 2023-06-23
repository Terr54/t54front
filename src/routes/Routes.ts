import { lazy } from 'react'
import AccountLayout from '../pages/layouts/account/Acocunt.layout';
import GenaralLayout from '../pages/layouts/admin/General.layout';
import MainLayout from '../pages/layouts/main/Main.layout'
import VendorLayout from '../pages/layouts/vendor/Vendor.layout';
import type { RouteType } from '../types'
// import { createAuthorityGaurd } from './guards'
// Import { guest } from './guards';
import { path } from './paths'

export const routes: RouteType[] = [
  {
    path: path.LANDING,
    component: lazy(async () => await import('../pages/landing/Landing.page')),
    layout: MainLayout
  },
  {
    path: path.SIGNIN,
    component: lazy(async () => await import('../pages/auth/signin/Signin.page'))
  },
  {
    path: path.SIGNUP,
    component: lazy(async () => await import('../pages/auth/signup/Signup.page'))
  },
  {
    path: path.ACCOUNTSETUP,
    component: lazy(async () => await import('../pages/auth/account-setup/AccountSetup.page'))
  },
  {
    path: path.ABOUT,
    component: lazy(async () => await import('../pages/about-us/AboutUs.page')),
    layout: MainLayout
  },
  {
    path: path.MARKET,
    component: lazy(async () => await import('../pages/market/Market.page')),
    layout: MainLayout
  },
  {
    path: path.CAREERS,
    component: lazy(async () => await import('../pages/careers/Careers.page')),
    layout: MainLayout
  },
  {
    path: path.ALLPRODUCTS,
    component: lazy(async () => await import('../pages/all-products/AllProducts.page')),
    layout: MainLayout
  },
  {
    path: path.PRODUCTDETAIL,
    component: lazy(async () => await import('../pages/product-detail/ProductDetail.page')),
    layout: MainLayout
  },
  {
    path: path.SUPPLIERS,
    component: lazy(async () => await import('../pages/suppliers/Suppliers.page')),
    layout: MainLayout
  },
  {
    path: path.CHECKOUTSUMMARY,
    component: lazy(async () => await import('../pages/checkout-summary/CheckoutSummary.page')),
    layout: MainLayout
  },
  {
    path: path.ADMINSUPPLIER,
    component: lazy(async () => await import('../pages/admin/suppliers/Suppliers.page')),
    layout: GenaralLayout
  },
  {
    path: path.PENDINGPRODUCTS,
    component: lazy(async () => await import('../pages/admin/pending-products/PendingProducts.page')),
    layout: GenaralLayout
  },
  {
    path: path.VENDOR,
    component: lazy(async () => await import('../pages/vendor/dashboard/Dashboard.page')),
    layout: GenaralLayout
  },
  {
    path: path.NEWSLETTER,
    component: lazy(async () => await import('../pages/admin/newsletter/NewsLetter.component')),
    layout: GenaralLayout
  },
  {
    path: path.VENDORPRODUCTS,
    component: lazy(async () => await import('../pages/vendor/products/Products.page')),
    layout: GenaralLayout
  },
  {
    path: path.VENDORINVOICES,
    component: lazy(async () => await import('../pages/vendor/invoices/Invoices.page')),
    layout: GenaralLayout
  },
  {
    path: path.VENDORORDERS,
    component: lazy(async () => await import('../pages/vendor/orders/Orders.page')),
    layout: GenaralLayout
  },
  {
    path: path.VENDORWALLETS,
    component: lazy(async () => await import('../pages/vendor/wallets/Wallets.page')),
    layout: GenaralLayout
  },
  {
    path: path.EDITPRODUCT,
    component: lazy(async () => await import('../pages/vendor/edit-product/EditProduct.page')),
    layout: GenaralLayout
  },
  {
    path: path.MYACCOUNT,
    component: lazy(async () => await import('../pages/account/my-account/MyAccount.page')),
    layout: GenaralLayout
  },
  {
    path: path.QUOTES,
    component: lazy(async () => await import('../pages/account/quotes/Quotes.page')),
    layout: GenaralLayout
  },
  {
    path: path.QUOTEDETAIL,
    component: lazy(async () => await import('../pages/account/quote-detail/QuoteDetail.page')),
    layout: GenaralLayout
  },
  {
    path: path.PURCHASES,
    component: lazy(async () => await import('../pages/account/purchases/Purchases.page')),
    layout: GenaralLayout
  },
  {
    path: path.PURCHASEDETAIL,
    component: lazy(async () => await import('../pages/account/purchase-detail/PurchaseDetail.page')),
    layout: GenaralLayout
  },
  {
    path: path.INVOICES,
    component: lazy(async () => await import('../pages/account/invoices/Invoices.page')),
    layout: GenaralLayout
  },
  {
    path: path.INVOICEDETAIL,
    component: lazy(async () => await import('../pages/account/invoice-detail/InvoiceDetail.page')),
    layout: GenaralLayout
  },
  {
    path: path.SHIPMENTS,
    component: lazy(async () => await import('../pages/account/shipments/Shipments.page')),
    layout: GenaralLayout
  },
  {
    path: path.SHIPMENTDETAIL,
    component: lazy(async () => await import('../pages/account/shipment-detail/ShipmentDetail.page')),
    layout: GenaralLayout
  },
  {
    path: path.BOOKMARKS,
    component: lazy(async () => await import('../pages/account/bookmarks/Bookmarks.page')),
    layout: GenaralLayout
  },
  {
    path: path.BOOKMARKDETAIL,
    component: lazy(async () => await import('../pages/account/bookmark-detail/BookmarkDetail.page')),
    layout: GenaralLayout
  },
  {
    path: path.HERBSANDSPICES,
    component: lazy(async () => await import('../pages/herbs-and-spices/HerbsAndSpices.page')),
    layout: MainLayout
  },
  {
    path: path.TERREBASICS,
    component: lazy(async () => await import('../pages/terre-basics/TerreBasics.page')),
    layout: MainLayout
  },
  {
    path: path.CONTACT,
    component: lazy(async () => await import('../pages/contact-us/ContactUs.page')),
    layout: MainLayout
  },
  {
    path: path.BLOG,
    component: lazy(async () => await import('../pages/blog/Blog.page')),
    layout: MainLayout
  },
  {
    path: path.CULTIVATION,
    component: lazy(async () => await import('../pages/cultivation/Cultivation.page')),
    layout: MainLayout
  },
  // {
  //   path: path.LOGIN,
  //   component: lazy(async () => await import('../pages/auth/login/Login.page')),
  //   guards: []
  // },
  // {
  //   path: path.USERPROFILEFORM,
  //   component: lazy(async () => await import('../pages/auth/UserProfileForm/UserProfileForm.page')),
  //   guards: [createAuthorityGaurd(['user.*'])]
  // },
  {
    path: path.TERMS_OF_SERVICE,
    component: lazy(async () => await import('../pages/terms-of-service/TermsOfService.page')),
    layout: MainLayout
  },
  {
    path: path.PRIVACY_POLICY,
    component: lazy(async () => await import('../pages/privacy-policy/PrivacyPolicy.page')),
    layout: MainLayout
  },
  {
    path: path.REGISTER,
    component: lazy(async () => await import('../pages/auth/register/Register.page')),
    guards: []
  },
  {
    path: path.FILE_UPLOAD,
    component: lazy(async () => await import('../components/FileUpload/FileUpload.component')),
    guards: []
  },
  {
    path: path.NETWORK_ERROR,
    component: lazy(async () => await import('../pages/error/network.page'))
  },
  {
    path: path.VALIDATE_EMAIL,
    component: lazy(async () => await import('../pages/verifyEmail/VerifyEmail.page'))
  },
  // This should be the last entry, for some reason I prefer it to be so
  {
    path: '*',
    component: lazy(async () => await import('../pages/error/notfound.page')),
    layout: MainLayout
  }
]
