import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

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
        </ul>
        <ul className='navbar-nav mb-2 mb-lg-0'>
        <li class="nav-item">
            <a class="nav-link">
            <NavLink  to="/register" style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "gray",
              textDecoration:'none',
              backgroundColor:isActive?'yellow':"",
              fontSize:isActive?'20px':'16px'
            };
          }}>Register</NavLink></a>
          </li>
        <li class="nav-item">
            <a class="nav-link">
            <NavLink  to="/login" style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "gray",
              textDecoration:'none',
              backgroundColor:isActive?'yellow':"",
              fontSize:isActive?'20px':'16px'
            };
          }}>Login</NavLink></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
