import React, { useState } from 'react'

const Addition = () => {
    let [num1] = useState(20)
    let [num2] = useState(30)
    // let [result] = React.useState('')
    let [result,setResult] = useState('')
    let [isActive,setIsActive]=useState(true)
    let [users,setUsers]=useState([])
    let [student] =useState({fname:'',lname:''})
    
    let handleAdd=()=>{
        setResult(num1+num2) // result =  num1+num2 //async
        console.log(result)
    }
  return (
    <>
    <button type="button"  class="btn btn-primary" onClick={handleAdd} >
        Add
    </button>
    
      <h1>num1  = {num1} and num2= {num2}  </h1>
      {result !='' &&  <h4>addition = {result}</h4>}
     
    </>
  )
}

export default Addition
