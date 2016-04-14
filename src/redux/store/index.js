import ProdStore from './configStore.prod';
import DevStore from './configStore.dev';

function getStore() {
  let store;
  if (process.env.NODE_ENV === 'production') {
    store = ProdStore;
  } else {
    store = DevStore;
  }
  return store;
}
export default getStore();
