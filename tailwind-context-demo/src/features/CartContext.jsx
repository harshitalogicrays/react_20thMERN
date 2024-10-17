import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

const mycontext = createContext() 

const CartContext = ({children}) => {
    let [cartItems,setCartItems]=useState([])
    let [total,setTotal]=useState(0)
    let addtocart=(product)=>{ 
     const itemIndex =  cartItems.findIndex(item=>item.id==product.id) 
      if(itemIndex == -1){
        setCartItems([...cartItems,{...product,qty:1}])
        toast.success(`${product.title} added to cart`)
      }
      else toast.info(`${product.title} already added to cart`)
    }

    let increase=(product)=>{
      const itemIndex =  cartItems.findIndex(item=>item.id==product.id) 
      if(itemIndex!=-1){
        if(product.stock > cartItems[itemIndex].qty)
          cartItems[itemIndex].qty++
        else toast.info(`only ${product.stock} qty available`)
      }
      setCartItems([...cartItems])
    }

    let decrease=(product)=>{
      const itemIndex =  cartItems.findIndex(item=>item.id==product.id) 
      if(itemIndex!=-1){
        if(cartItems[itemIndex].qty > 1)
          cartItems[itemIndex].qty--
        else  cartItems[itemIndex].qty = 1
      }
      setCartItems([...cartItems])
    }

    let removefromcart=(product)=>{
      const itemIndex =  cartItems.findIndex(item=>item.id==product.id) 
      if(itemIndex !=-1)
          cartItems.splice(itemIndex,1)
      setCartItems([...cartItems])

    //   const filter=  cartItems.filter(item=>item.id!=product.id) 
    //  setCartItems([...filter])
  
    }
    let emptycart=()=>{ setCartItems([]);setTotal(0)}

    let calculatetotal=()=>{
        const t =  cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)
        setTotal(t)}

  return (
    <mycontext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculatetotal}}>
        {children}
    </mycontext.Provider>
  )
}

export default CartContext

export const ContextCart = ()=>useContext(mycontext)