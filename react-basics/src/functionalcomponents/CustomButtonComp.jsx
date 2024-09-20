import React from 'react'

const CustomButton = ({type="button",class1="btn btn-primary",children=['Button'],disabled=false,onClick,...props}) => {
  return (
    <>
        <button 
        type={type} 
        className={class1} 
        disabled={disabled}
        onClick={onClick}
        {...props}
        >{children}</button>
   </>
  )
}

export default CustomButton
