import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import itemSlice from './itemSlice'
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
            auth:authSlice,
            category:categorySlice,
            item:itemSlice,
            cart:cartSlice
    }
})
export default store 
