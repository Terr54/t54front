import { ProductStock, Product } from '../domain/domain';
import { Filter, StockFilterName } from '../types';
import airPic from '../assets/pictures/air.jpg';
import boatPic from '../assets/pictures/boat.png';

export const stockFilters: Record<StockFilterName, Filter<ProductStock[]>> = {
  all: {
    name: 'all',
    test() {
      return true;
    },
  },
  verified: {
    name: 'verified',
    test(stocks) {
      return stocks?.length > 0 && !!stocks?.some((s) => s.verifiedAt != null);
    },
  },
  unverified: {
    name: 'unverified',
    test(stocks) {
      return (
        !stocks ||
        stocks?.length === 0 ||
        !!stocks?.every((s) => s.verifiedAt == null)
      );
    },
  },
};

export const categoryFilter: Filter<Product, string> = {
  name: 'category',
  test(item, category) {
    return (
      category === 'product.all' ||
      item.category?.toLowerCase() === category?.toLowerCase()
    );
  },
};

export const requestQuoteFields = {
  customerType: ['I am a new customer', 'I am an existing customer', 'Other'],
  customLabels: ['No', 'Yes', 'Other'],
  specifications: ['Oganic/Bio', 'Faire trade', 'Other'],
  processing: ['Flaskes', 'Powder', 'Dried', 'Fresh', 'Other'],
  paymentTerms: [
    'Cash to goods 100% upfront',
    'Cash to goods 50% upfront',
    'Cash to goods 25% upfront',
    'Cash to goods 10% upfront',
    'Irrevocable Letter of Credit',
    'Bank guarantee',
    'Terre financing (by default)',
    'Other',
  ],
  packaging: ['1kg - 10kg', '20kg - 45kg', 'Over 50kg', 'Other'],
  transportation: [
    {
      option: 'Air freight',
      image: airPic,
    },
    {
      option: 'Maritime/ Boat',
      image: boatPic,
    },
    {
      option: 'Other',
    },
  ],
  incoterms: ['Exw', 'FOB', 'CFR', 'CIF', 'DAP', 'DDP', 'Other'],
  samplesRequired: ['No', 'Yes', 'Other'],
  inspection: ['SGS', 'Cotenca', 'Intertek', 'Bureau Veritas', 'Country'],
  contactMethod: ['Phone', 'Email', 'Other'],
};

export const productSpecificationFields = {
  usedPlans: ['Fruits', 'Leafs', 'Roots', 'Other'],
  productCapacity: ['Up to 100Kg', 'Up to 1T', 'More than 1T', 'Other'],
  currency: ['$USD', 'XAF', 'EUR'],
  harvestPeriod: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
};
