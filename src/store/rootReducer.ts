import loader from './features/slices/loader/loader.slice';
import user from './features/slices/user';
import supplier from './features/slices/supplier';
import categories from './features/slices/product/categories';
import products from './features/slices/product'

const rootReducer = {
  loader,
  user,
  supplier,
  categories,
  products
}
export default rootReducer
