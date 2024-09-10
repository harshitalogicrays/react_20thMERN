import React, { useState } from 'react'
import ChildrenCounter from './ChildrenCounter'

const ParentCounter = () => {
    let [count,setCount] = useState('')

    let handleIncrease=(val)=>setCount(parseInt(count+val))
    
    let handleDecrease=(val)=>{
      if(count>1) setCount(parseInt(count-val))
        else 
      setCount(1)
    }
  return (
   <>
   <ChildrenCounter handleIncrease={handleIncrease} handleDecrease={handleDecrease}/> <hr/>
    <h1>{count}</h1>
   </>
  )
}

export default ParentCounter
