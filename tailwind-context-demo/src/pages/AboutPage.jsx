import React from 'react'
import { toast } from 'react-toastify'

const AboutPage = () => {
  return (
   <>
    <h1>About Us Page</h1>
    <button type="button" onClick={()=>toast.info("ok")}>click Me</button>
   </>
  )
}

export default AboutPage
