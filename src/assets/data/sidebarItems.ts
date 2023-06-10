import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { path } from '../../routes/paths';

export const sidebarItems = [
  {
    id: 0,
    title: 'dashboard',
    icon: GridViewOutlinedIcon,
    to: '/dashboard'
  },
  {
    id: 1,
    title: 'customers',
    icon: PeopleAltOutlinedIcon
  },
  {
    id: 2,
    title: 'suppliers',
    icon: PeopleAltOutlinedIcon,
    to: '/customers/suppliers'
  },
  {
    id: 3,
    title: 'buyers',
    icon: PeopleAltOutlinedIcon,
    to: '/customers/buyers'
  },
  {
    id: 4,
    title: 'campaigns',
    icon: CampaignOutlinedIcon,
    to: '/campaigns'
  },
  {
    id: 5,
    title: 'insights',
    icon: InsightsOutlinedIcon,
    to: '/insights'
  },
  {
    id: 6,
    title: 'orders',
    icon: ReceiptLongOutlinedIcon,
    to: '/orders'
  },
  {
    id: 7,
    title: 'shipments',
    icon: Inventory2OutlinedIcon,
    to: '/shipments'
  },
  {
    id: 8,
    title: 'settings',
    icon: SettingsOutlinedIcon,
    to: '/settings'
  },
  {
    id: 9,
    title: 'Pending Products',
    icon: PendingActionsIcon,
    to: '/pending-products'
  }
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
