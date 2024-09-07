import React from 'react'
// import './notfound.css'
import cssm from './notfound.module.css'
const Pagenotfound = () => {
    let cssvar ={
        color:"red",
        fontSize: "50px",
        position: "fixed",
        top:"50%",
        left:"50%",
        transform: 'translate(-50%,-50%)'
    }
  return (
    // <h1 style={{color:'red',backgroundColor:'GrayText'}}>404 Not Found</h1>
    // <h1 className='notfound'>404 Not Found</h1>
    // <h1 style={cssvar}>404 Not Found</h1>

    <h1 className={cssm.notfound}>404 Not Found</h1>
  )
}

export default Pagenotfound
