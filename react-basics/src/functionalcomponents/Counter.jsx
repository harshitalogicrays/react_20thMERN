import React, { useState } from 'react'

const Counter = ({num}) => {
    // let [count,setCount]=useState('')
   
    let [count,setCount]=useState(parseInt(num))
    let handleIncrease=()=>{
        // setCount(parseInt(count+1)) 
        setCount((prev)=>parseInt(prev+1))
    }

    let handleDecrease=()=>{
        if(count>1)
            setCount((prev)=>parseInt(prev-1))
        else 
            setCount(1)
    }
  return (
  <>
    <button type="button" class="btn btn-primary me-4" onClick={handleIncrease}>Increase by 1  </button>
    <button type="button" class="btn btn-primary" onClick={handleDecrease}>Decrease by 1  </button>

    <h1>{count}</h1>
    
  </>
  )
}

export default Counter
