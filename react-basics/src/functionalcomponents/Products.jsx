import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'


const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{ getData()  },[]) //executes only one time when comp is getting load 

    // let getData=()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then((res)=>{
    //        return res.json().then((data)=>{
    //         // console.log(data.products)
    //         setProducts(data.products)
    //        })
    //     })
    //     .catch((err)=>console.log(err))
    // }

    let getData = async()=>{
        try{
            let res = await fetch("https://dummyjson.com/products")
            let data =await res.json()
            setProducts(data.products)
        }
        catch(err){
            console.log(err)
        }
    }
  return (
   <>
    <h1>Products </h1>
    <ProductItem products={products}/>
   </>
  )
}

export default Products
