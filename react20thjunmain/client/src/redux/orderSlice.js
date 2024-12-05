import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:{orders:[]},
    reducers:{
        storeorders(state,action){
            state.orders = action.payload
        }
    }
})
export const {storeorders} = orderSlice.actions
export default orderSlice.reducer
export const selectorder = state=>state.order.orders