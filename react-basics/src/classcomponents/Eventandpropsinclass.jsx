import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export default class Eventandpropsinclass extends Component {
  handleClick=()=>{
    alert("button clicked")
    // this.props.username = "Sad" //read only
  }
  render() {
    return (
    <>
      <h1>{this.props.username}</h1>
      <h2>{this.props.isActive ? "User is Active" :<>User is not active</>}</h2>
      <button type="button" class="btn btn-primary" onClick={this.handleClick} > Click Me </button>
      
    </>
    )
  }}

Eventandpropsinclass.defaultProps={username:"Guest"}
Eventandpropsinclass.propTypes={username:PropTypes.string,isActive:PropTypes.bool}