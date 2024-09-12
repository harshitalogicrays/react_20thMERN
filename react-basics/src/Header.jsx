import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  let dropdownlinks = [
    {id:1,text:'props and event demo',url:'/funprops'},
    {id:2,text:'state demo',url:'/funstate/counter'},
    {id:3,text:'form demo',url:'/funform'},
    {id:4,text:'form validations',url:'/funform/validation'},
    {id:5,text:'Lifting the state up',url:'/lifting'},
    {id:6,text:'React hook Form + React Bootstrap',url:'/rhf'}
  ]
  return (
    <nav class="navbar navbar-expand-lg bg-dark  navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CRA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link">
            <NavLink  to="/" style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "gray",
              textDecoration:'none',
              backgroundColor:isActive?'yellow':"",
              fontSize:isActive?'20px':'16px'
            };
          }}>Home</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
            <NavLink  to="/fundemo" style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "gray",
              textDecoration:'none',
              backgroundColor:isActive?'yellow':"",
              fontSize:isActive?'20px':'16px'
            };
          }}>fundemo</NavLink></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Functional Components
            </a>
            <ul class="dropdown-menu">
              {dropdownlinks.map((link,i)=><Fragment key={link.id}>
                <li><a class="dropdown-item">
                <NavLink  to={link.url} style={({ isActive}) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "gray",
                        textDecoration:'none',
                        backgroundColor:isActive?'yellow':"",
                        fontSize:isActive?'20px':'16px'
                      };
                    }} end> {link.text}</NavLink>
                 </a></li>
                {i!=dropdownlinks.length-1 &&  <li><hr class="dropdown-divider"/></li> }
              </Fragment>
              )}
              
        
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
