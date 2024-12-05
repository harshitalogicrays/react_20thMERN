import React from 'react'
import Image1 from '/src/assets/loader.gif'
import cssmodule from './loader.module.css'
import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={cssmodule.wrapper}>
        <div className={cssmodule.loader}>
            <img src={Image1}/>
        </div>
    </div> , document.getElementById("loader")
  )
}

export default Loader
