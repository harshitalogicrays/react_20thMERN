import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, STORE_ITEMS } from '../redux/itemSlice'
import ProductCard from './ProductCard'

const Products = () => {
  const dispatch = useDispatch()
  const getData = async()=>{
    try{
      const res  = await fetch(`${import.meta.env.VITE_BASE_URL}/products`)
      const data  =await res.json()
      dispatch(STORE_ITEMS(data))
    }
    catch(err){console.log(err)}
  }

  useEffect(()=>{getData()},[])

  const items = useSelector(selectItems)
  return (
   <div className="container mt-5">
      <ProductCard items={items}/>
   </div>
  )
}

export default Products
