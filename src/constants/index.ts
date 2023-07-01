import { ProductStock, Product } from '../domain/domain';
import { Filter, StockFilterName } from '../types';

export const stockFilters: Record<StockFilterName, Filter<ProductStock[]>> = {
  all: {
    name: 'all',
    test () {
      return true;
    }
  },
  verified: {
    name: 'verified',
    test (stocks) {
      return stocks?.length > 0 && !!stocks?.some(s => s.verifiedAt != null)
    }
  },
  unverified: {
    name: 'unverified',
    test (stocks) {
      return !stocks || stocks?.length === 0 || !!stocks?.every(s => s.verifiedAt == null)
    }
  }
};

export const categoryFilter: Filter<Product, string> = {
  name: 'category',
  test (item, category) {
    return category === 'product.all' || item.category?.toLowerCase() === category?.toLowerCase();
  }
}

export const paymentTerms = [
  '10%90% on delivery', '50%50% on delivery', '100%'
];
