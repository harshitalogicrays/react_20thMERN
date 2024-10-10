import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ProductItem from './ProductItem'

const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{ getData()  },[]) 
  let getData = async()=>{
      try{
          let res = await fetch("https://dummyjson.com/products") //get
          let data =await res.json()
          setProducts(data.products)
      }
      catch(err){ toast.error(err.message)}
  }
 
  return (
    <>
    <ProductItem products={products}/>
    </>
  )
}

export default Products
