import loader from './features/slices/loader/loader.slice';
import user from './features/slices/user';
import supplier from './features/slices/supplier';
import categories from './features/slices/product/categories';
import products from './features/slices/product';
import newsletterSubscription from './features/slices/newsletter/subscription.slice';
import newsletterInbox from './features/slices/newsletter/inbox.slice';

const rootReducer = {
  loader,
  user,
  supplier,
  categories,
  products,
  newsletterSubscription,
  newsletterInbox,
}
export default rootReducer
