import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import categories from './models/categories';
import products from './models/products';
import stories from './models/stories';
import branches from './models/branches';
import news from './models/news';
import orders from './models/orders';

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [loadingPlugin],
  models: {
    categories,
    products,
    stories,
    branches,
    news,
    orders,
  },
});

export default store;
