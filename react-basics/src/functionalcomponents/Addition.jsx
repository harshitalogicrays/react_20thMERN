import React, { useState } from 'react'

const Addition = () => {
    let [num1,setNum1] = useState(33)
    let [num2,setNum2] = useState(54) 
    // let [result] = React.useState('')
    let [result,setResult] = useState('')
    let [isActive,setIsActive]=useState(true)
    let [users,setUsers]=useState([])
    let [student] =useState({fname:'',lname:''})
    
    let handleAdd=()=>{
        setResult(num1+num2) // result =  num1+num2 //async
        console.log(result)
    }

    let handleNum1=(e)=>{ 
      // console.log(e.target.value)
      setNum1(e.target.value)
    }
  return (
    <>
    <input type="text" className="form-control" value={num1} onChange={handleNum1}/>
    <input type="text" className="form-control" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
    <button type="button"  class="btn btn-primary mt-3" onClick={handleAdd} >
        Add
    </button>
    
      <h1>num1  = {num1} and num2= {num2}  </h1 >
      {result !='' &&  <h4>addition = {result}</h4>}
     
    </>
  )
}

export default Addition
