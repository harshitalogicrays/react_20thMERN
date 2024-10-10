import React, { createContext, useContext, useState } from 'react'

const mycontext = createContext() 

const CartContext = ({children}) => {
    let [cartItems,setCartItems]=useState([])
    let [total,setTotal]=useState(0)
    let addtocart=(product)=>{ console.log("add to cart from context called",product)}

    let increase=()=>{}
    let decrease=()=>{}
    let removefromcart=()=>{}
    let emptycart=()=>{}
    let calculatetotal=()=>{}
  return (
    <mycontext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculatetotal}}>
        {children}
    </mycontext.Provider>
  )
}

export default CartContext

export const ContextCart = ()=>useContext(mycontext)