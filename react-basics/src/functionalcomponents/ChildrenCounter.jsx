import React from 'react'

const ChildrenCounter = ({handleIncrease,handleDecrease}) => {
    // console.log(handleIncrease)
  return (
   <>
    <button type="button" class="btn btn-primary me-2" onClick={()=>handleIncrease(1)}
    >  Increase by 1 </button>
    
     <button type="button" class="btn btn-primary me-2" onClick={()=>handleIncrease(5)}
    >  Increase by 5 </button>

      <button type="button" class="btn btn-primary me-2" onClick={()=>handleDecrease(1)}
    >  Decrease by 1 </button>
    
     <button type="button" class="btn btn-primary me-2" onClick={()=>handleDecrease(5)}
    >  Decrease by 5 </button>
   </>
  )
}

export default ChildrenCounter
