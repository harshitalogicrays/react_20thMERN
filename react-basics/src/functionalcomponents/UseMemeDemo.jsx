import React, { useMemo, useState } from 'react'
import CustomButton from './CustomButtonComp'

const UseMemeDemo = () => {
    let [count,setCount]=useState(1)
    let [show,setShow]=useState(false)
    let handleClick=()=>setCount(count+1)

    let countervalue = (count)=>{
        console.log(count)
        for(let i=1;i<=1000000000;i++){}
        return count
    }
    // let checkcount = countervalue(count)

    let checkcount = useMemo(()=>countervalue(count),[count])
  return (
    <>
        <CustomButton class1="btn btn-danger" onClick={handleClick}>Counter</CustomButton><br/>
        <h2>{checkcount}</h2>
        <CustomButton class1="btn btn-info" onClick={()=>setShow(!show)}>{show?"show":"hide"}</CustomButton>
    </>
  )
}

export default UseMemeDemo
