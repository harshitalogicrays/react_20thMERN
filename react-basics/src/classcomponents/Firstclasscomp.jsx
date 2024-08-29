// import { Component } from "react";
// class Firstclasscomp extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>First class comp</h1>
//             </div>
//         ) }
// }
// export default Firstclasscomp

// rcc
import React, { Component, Fragment } from 'react'
export default class Firstclasscomp extends Component {
  render() {
    // console.log("thekht")
    return (
      <Fragment>
           <h1>First class comp</h1>
           <>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro beatae at vero totam modi fugit exercitationem iste. Exercitationem vitae minima, ab pariatur itaque explicabo officia aliquam quos! Quasi, vitae fugit.</p>
           </>
      </Fragment>
    )
  }
}
