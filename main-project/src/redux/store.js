import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import itemSlice from './itemSlice'
const store = configureStore({
    reducer:{
            auth:authSlice,
            category:categorySlice,
            item:itemSlice
    }
})
export default store 
