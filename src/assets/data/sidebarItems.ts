import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { NotificationImportant } from '@mui/icons-material';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { path } from '../../routes/paths';
export const roleName = {
  admin: 'ADMIN',
  user: 'USER',
  supplier: 'SUPPLIER'
}
export interface SidebarItemType {
  id: number,
  title: string,
  icon?: any,
  to?: string,
  roles?: string[]
}
export const sidebarItems: SidebarItemType[] = [
  {
    id: 0,
    title: 'dashboard',
    icon: GridViewOutlinedIcon,
    to: path.VENDOR,
    roles: [roleName.admin, roleName.supplier]
  },
  /*{
    id: 1,
    title: 'customers',
    icon: PeopleAltOutlinedIcon,
    roles: [roleName.admin]
  },
  {
    id: 2,
    title: 'suppliers',
    icon: PeopleAltOutlinedIcon,
    to: '/customers/suppliers',
    roles: [roleName.admin]
  },
  {
    id: 3,
    title: 'buyers',
    icon: PeopleAltOutlinedIcon,
    to: '/customers/buyers',
    roles: [roleName.admin]
  },
  {
    id: 4,
    title: 'campaigns',
    icon: CampaignOutlinedIcon,
    to: '/campaigns',
    roles: [roleName.admin]
  },
  {
    id: 5,
    title: 'insights',
    icon: InsightsOutlinedIcon,
    to: '/insights',
    roles: [roleName.admin]
  },
  {
    id: 8,
    title: 'settings',
    icon: SettingsOutlinedIcon,
    to: '/settings',
    roles: [roleName.admin]
  },
  {
    id: 6,
    title: 'orders',
    icon: ReceiptLongOutlinedIcon,
    to: '/orders',
    roles: [roleName.admin]
  },*/
  {
    id: 7,
    title: 'shipments',
    icon: Inventory2OutlinedIcon,
    to: path.SHIPMENTS,
    roles: [roleName.admin]
  },
  {
    id: 9,
    title: 'Pending Products',
    icon: PendingActionsIcon,
    to: path.PENDINGPRODUCTS,
    roles: [roleName.admin]
  },
  {
    id: 11,
    title: 'orders',
    icon: ReceiptOutlinedIcon,
    to: path.VENDORORDERS,
    roles: [roleName.admin, roleName.supplier]
  },
  {
    id: 12,
    title: 'invoices',
    icon: ReceiptLongOutlinedIcon,
    to: path.VENDORINVOICES,
    roles: [roleName.admin, roleName.supplier]
  },
  {
    id: 13,
    title: 'products',
    icon: Inventory2OutlinedIcon,
    to: path.VENDORPRODUCTS,
    roles: [roleName.admin, roleName.supplier]
  },
  {
    id: 14,
    title: 'wallets',
    icon: AccountBalanceWalletOutlinedIcon,
    to: path.VENDORWALLETS,
    roles: [roleName.admin, roleName.supplier]
  },
  {
    id: 15,
    title: 'newsletter',
    icon: NotificationImportant,
    to: path.NEWSLETTER,
    roles: [roleName.admin]
  },
];

export const vendorSidebarItems = [
  {
    id: 0,
    title: 'dashboard',
    icon: GridViewOutlinedIcon,
    to: path.VENDOR
  },
  {
    id: 1,
    title: 'orders',
    icon: ReceiptOutlinedIcon,
    to: path.VENDORORDERS
  },
  {
    id: 2,
    title: 'invoices',
    icon: ReceiptLongOutlinedIcon,
    to: path.VENDORINVOICES
  },
  {
    id: 3,
    title: 'products',
    icon: Inventory2OutlinedIcon,
    to: path.VENDORPRODUCTS
  },
  {
    id: 4,
    title: 'wallets',
    icon: AccountBalanceWalletOutlinedIcon,
    to: path.VENDORWALLETS
  }
];
export const accountSidebarItems = [
  {
    id: 0,
    title: 'quotes',
    icon: RequestQuoteOutlinedIcon,
    to: '/quotes'
  },
  {
    id: 1,
    title: 'purchases',
    icon: ReceiptOutlinedIcon,
    to: '/purchases'
  },
  {
    id: 2,
    title: 'invoices',
    icon: ReceiptLongOutlinedIcon,
    to: '/invoices'
  },
  {
    id: 3,
    title: 'shipments',
    icon: LocalShippingOutlinedIcon,
    to: '/shipments'
  },
  {
    id: 4,
    title: 'bookmarks',
    icon: AccountBalanceWalletOutlinedIcon
  },
  {
    id: 5,
    title: 'Settings',
    icon: SettingsOutlinedIcon,
    to: '/settings'
  }
];
