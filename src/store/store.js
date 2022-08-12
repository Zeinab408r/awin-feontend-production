import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../features/productsSlice';
import subCategoryReducer from '../features/subCategorySlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    subcategory:subCategoryReducer,
  },
});

export default store;
