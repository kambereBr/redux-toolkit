import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart/cartSlice';
import modalSlice from './feature/modal/modalSlice';

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        modal: modalSlice,
    },
});