import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Features/product/productSlice'
import bagSlice from './Features/bag/bagSlice'
import toggleReducer from './Features/toggle/toggleSlice'
import userSlice from './Features/user/userSlice'
import orderSlice from './Features/order/orderSlice'

import modalSlice from './Features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    toggle: toggleReducer,
    bag: bagSlice,
    user: userSlice,
    order: orderSlice,
    modal: modalSlice
  },
});
