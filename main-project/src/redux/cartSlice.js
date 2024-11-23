import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{cartItems:[],total:0} ,
  reducers:{
    addtocart(state,action){},
    increase(state,action){},
    decrease(state,action){},
    removefromcart(state,action){},
    emptycart(state,action){},
    calculatetotal(state,action){}
  } 
})
export const {addtocart,increase,decrease,removefromcart,emptycart,calculatetotal} = cartSlice.actions
export default cartSlice.reducer
export const selectCartItems = state=>state.cart.cartItems
export const selectTotal = state=>state.cart.total