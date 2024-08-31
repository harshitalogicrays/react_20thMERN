import React from 'react'
import PropsDemoChildren from './PropsDemoChildren'
import Firstfuncomp from './Firstfuncomp'
/*
const Propsdemo = (props) => {
  console.log(props) //{username:'dhaval',address:'ahmedabad'}
  let str="home"
  // props.username = "Fenil" //Cannot assign to read only property 'username' of object
  return (
    <>
      <h1>Props demo</h1><hr/>
      <h4>{str}</h4>
      <h2>{props.username}</h2>
      <h3>{props.address}</h3>
    </>
  )
}

export default Propsdemo */


const propsdemo = ({username,address,isActive}) => {
  return (
   <>
    <h3>{username}</h3>
    {/* <h4>
      {isActive ? 
      <>Yes He is Active</> 
      : <>No he is not active</>
  }</h4> */}

{/* <h4>
      {isActive ? 
      <>Yes He is Active</> 
      : ''
  }</h4> */}

<h4>{isActive  && <>Yes He is Active</> }</h4>
  <h4>{(isActive && address=="ahmedabad") && <>Yes He is Active</> }</h4>

  <PropsDemoChildren products={["product1","product2","product3","product4"]}>
    <p>paragraph</p>
    <div>div data</div>
    <Firstfuncomp/>
  </PropsDemoChildren>
   </>
  )
}

export default propsdemo

