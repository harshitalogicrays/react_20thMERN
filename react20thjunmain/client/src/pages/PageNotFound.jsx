import React from 'react'

const PageNotFound = () => {
    let cssvar ={
        color:"red",
        fontSize: "50px",
        position: "fixed",
        top:"50%",
        left:"50%",
        transform: 'translate(-50%,-50%)'
    }
  return (
   <>
    <h1 style={cssvar}>404 Not Found</h1>
   </>
  )
}

export default PageNotFound
