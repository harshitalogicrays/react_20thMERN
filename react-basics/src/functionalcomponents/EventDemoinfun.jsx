import React from 'react'

const EventDemoinfun = () => {
    let handleClick = ()=>{
        console.log("click event emitted")
    }

    let add = (a,b)=>{
        console.log(a+b)
    }
  return (
   <>
    <button type="button" className="btn btn-primary me-3" onClick={()=>alert("button clicked")} > Button  </button>

    <button type="button" className="btn btn-primary me-3" onClick={()=>handleClick()} > Button  </button>
    <button type="button" className="btn btn-primary me-3" onClick={handleClick} > Button  </button>
    <button type="button" className="btn btn-primary me-3" onClick={()=>add(2,3)} > Button  </button>
   </>
  )
}

export default EventDemoinfun
