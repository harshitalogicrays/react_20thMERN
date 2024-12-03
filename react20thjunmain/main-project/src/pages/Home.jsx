import React, { useEffect } from 'react'
import ImageCarousel from '../features/ImageCarousel'
import Products from '../features/Products'

const Home = () => {
  // const getData = async()=>{
  //   try{
  //     const res  = await fetch(`http://localhost:4000`)
  //     const data  =await res.json()
  //    console.log(data)
  //   }
  //   catch(err){console.log(err)}
  // }

  // useEffect(()=>{getData()},[])
  return (
  <>
    <ImageCarousel/>
    <br/>
    <Products/>
  </> 
  )
}

export default Home
