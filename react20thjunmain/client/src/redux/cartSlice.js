import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name:"cart",
  initialState:{cartItems:[],total:0} ,
  reducers:{
    addtocart(state,action){
      // console.log(action.payload)
      const itemIndex =  state.cartItems.findIndex(item=>item.id==action.payload.id) 
      if(itemIndex == - 1){
        state.cartItems = [...state.cartItems , {...action.payload,qty:1}]
        toast.success(`${action.payload.name} added to cart`)
      }
      else {
        toast.info(`${action.payload.name} already added to cart`)
      }
  
    },
    increase(state,action){
      const itemIndex =  state.cartItems.findIndex(item=>item.id==action.payload.id) 
      if(itemIndex!=-1){
        if(action.payload.stock > state.cartItems[itemIndex].qty)
          state.cartItems[itemIndex].qty++
        else toast.info(`only ${action.payload.stock} qty available`)
      }
      state.cartItems=[...state.cartItems]
    },
    decrease(state,action){
      const itemIndex =  state.cartItems.findIndex(item=>item.id==action.payload.id) 
      if(itemIndex!=-1){
        if(state.cartItems[itemIndex].qty > 1)
          state.cartItems[itemIndex].qty--
        else state.cartItems[itemIndex].qty=1
      }
      state.cartItems=[...state.cartItems]
    },
    removefromcart(state,action){
      const filter=  state.cartItems.filter(item=>item.id!=action.payload) 
      state.cartItems=[...filter]
    },
    emptycart(state,action){
      state.cartItems =[];state.total=0
    },
    calculatetotal(state,action){
      const t =  state.cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)
      state.total = t
    },
    updatecartitem(state,action){
      console.log(action.payload)
      const {id,size,color} =action.payload
      const item = state.cartItems.find(item=>item.id==id)
      if(item){ item.size= size ,item.color = color}
      state.cartItems=[...state.cartItems]
    }
  } 
})
export const {addtocart,increase,decrease,removefromcart,emptycart,calculatetotal,updatecartitem} = cartSlice.actions
export default cartSlice.reducer
export const selectCartItems = state=>state.cart.cartItems
export const selectTotal = state=>state.cart.total