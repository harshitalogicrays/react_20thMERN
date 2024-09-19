import React, { useEffect, useRef, useState } from 'react'

const UseEffectUSeCallbackUseRef = () => {
    const [value,setValue]=useState("")
    const [length,setLength]=useState(8)
    const [numAllowed,setNumAllowed]=useState(false)
    const [charAllowed,setCharAllowed]=useState(false)
    const copyRef = useRef()
    // let randomGenerator=()=>{
    //     let str='abcdefghijklmnopqrstuvuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if(numAllowed) str+='0987654321'
    //     if(charAllowed)str+='!@#$%^&*()_+=-.'

    //     let data=''
    //     for(let i=1;i<=length;i++){
    //        data+=str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setValue(data)
    // }

    let randomGenerator = React.useCallback(()=>{
        let str='abcdefghijklmnopqrstuvuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(numAllowed) str+='0987654321'
        if(charAllowed)str+='!@#$%^&*()_+=-.'

        let data=''
        for(let i=1;i<=length;i++){
           data+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setValue(data)
    },[length,numAllowed,charAllowed])
    useEffect(()=>{randomGenerator()},[length,numAllowed,charAllowed])

    let handleCopy=()=>{
        // document.getElementById('txt').select()
        copyRef.current.select()
        alert(copyRef.current.value)
        copyRef.current.style.fontSize='30px'
        window.navigator.clipboard.writeText(value)
    }
  return (
    <div className='container col-6 mt-5'>
        <div className="input-group">
            <input className='form-control' id="txt" ref={copyRef} value={value}/>
            <button type="button" className='btn btn-primary' onClick={handleCopy}>copy</button>
        </div>
        <input type="range" value={length} min="5" max="100" 
        onChange={(e)=>setLength(e.target.value)}/> Length:({length})&emsp;
        <input type="checkbox" 
        onClick={(e)=>setNumAllowed(!numAllowed)}/>Numbers&emsp;

        <input type="checkbox"   onClick={(e)=>setCharAllowed(!charAllowed)}/>Special Characters&emsp;
    </div>
  )
}

export default UseEffectUSeCallbackUseRef
