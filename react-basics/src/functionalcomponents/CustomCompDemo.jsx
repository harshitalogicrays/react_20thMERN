import React from 'react'
import CustomButton from './CustomButtonComp'

const CustomCompDemo = () => {
  return (
    <>
        <CustomButton type="button"  disabled={false}
        onClick={()=>alert("button clicked")}
        id="btn" style={{fontSize:'30px'}}
        >Click Me</CustomButton>

        <CustomButton type="button" class1="btn btn-danger" name="btn1"></CustomButton>
    </>
  )
}

export default CustomCompDemo
