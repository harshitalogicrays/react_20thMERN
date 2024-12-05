import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:"checkout",
    initialState:{shippingAddress:{}},
    reducers:{
        store_address(state,action){
            state.shippingAddress = action.payload
        }
    }
})
export const {store_address} = checkoutSlice.actions
export default checkoutSlice.reducer
export const selectCheckout = state=>state.checkout.shippingAddress