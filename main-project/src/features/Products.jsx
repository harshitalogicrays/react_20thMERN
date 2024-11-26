import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, STORE_ITEMS } from '../redux/itemSlice'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

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

  const allitems = useSelector(selectItems)
  const [items,setItems] =useState([])
  const {name} =useParams()
  const itembycat = allitems.filter(item=>item.category==name)
  useEffect(()=>{
      if(name)setItems(itembycat)
      else setItems(allitems)
  },[name,allitems])
  
  return (
    <>
             <div className="container mt-5">

             <ProductCard items={items}/>
       
          </div>  
    </>

  )
}

export default Products
