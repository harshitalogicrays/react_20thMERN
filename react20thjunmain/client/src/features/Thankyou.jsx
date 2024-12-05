import React from 'react'
import { Link } from 'react-router-dom'

const Thankyou = () => {
    let cssvar ={
        fontSize: "50px",
        position: "fixed",
        top:"50%",
        left:"50%",
        transform: 'translate(-50%,-50%)'
    }
  return (
    <div>
        <h1 style={cssvar}>Thank you for your order
        <Link to='/' 
            type="button"
            class="btn btn-primary" 
        >
            Continue Shopping 
        </Link>
        </h1>
    </div>
  )
}

export default Thankyou
