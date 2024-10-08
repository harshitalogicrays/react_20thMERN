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
import { Col, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom';
export default class Firstclasscomp extends Component {

   classDropdown =[
    {id:1,text:'props and event demo',url:'/classdemo/classprops'},
    {id:2,text:'state demo',url:'/classdemo/classstate'},
    {id:3,text:'form demo',url:'/classdemo/classform'},
    {id:4,text:'Lifecycle methods demo',url:'/classdemo/lifecycle'},
    {id:5,text:'pure comp demo',url:'/classdemo/pure'},
    {id:6,text:'ref demo',url:'/classdemo/ref'},
    {id:7,text:'HOC demo',url:'/classdemo/hoc'},
  ]
  render() {
    // console.log("thekht")
    return (
      <Row>
        <Col xs={3}>
            <ul class="nav flex-column">
              {this.classDropdown.map((link,i)=>
              <Fragment key={link.id}>
              <li class="nav-item"  style={{marginBottom:'10px',paddingLeft:'12px'}}>
                <NavLink  to={link.url} style={({ isActive}) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "gray",
                        textDecoration:'none',
                        backgroundColor:isActive?'yellow':"",
                      };
                    }} end> {link.text}</NavLink>
              </li>
              <hr/>
              </Fragment>
              )}

      </ul>
        </Col>
        <Col>
              <Outlet/>
        </Col>
      </Row>
    )
  }
}
