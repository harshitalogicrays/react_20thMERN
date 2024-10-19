import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        user:userSlice.reducer,
    }
})
//state => {user:{users:[],error:''},product:{products:[]}}
export default store