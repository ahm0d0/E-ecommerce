import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './SliderData.js';
import salesSlice from './SalesProducts.js';
import wishlistSlice from './wishList.js';
import CartListSlice from './cart.js';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    sales: salesSlice,
    wishList:wishlistSlice,
    cart:CartListSlice
  },
});
