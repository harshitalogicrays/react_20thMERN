import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import itemSlice from './itemSlice'
import cartSlice from "./cartSlice";
import checkoutSlice from './CheckoutSlice'
import orderSlice from './orderSlice'
const store = configureStore({
    reducer:{
            auth:authSlice,
            category:categorySlice,
            item:itemSlice,
            cart:cartSlice,
            checkout:checkoutSlice,
            order:orderSlice,
    }
})
export default store 
