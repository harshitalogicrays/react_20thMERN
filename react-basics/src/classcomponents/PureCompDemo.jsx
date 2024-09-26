import React, { Component, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
    constructor(props) {
        super(props)
          console.log("constructor called")
        this.state = {username:"Harshita"}
      }
      handleChange=()=>{
        console.log("handleChange called")
        this.setState({username:"Siya"})
    }
  render() {
    console.log("render called")
    return (
        <>
        <h1>{this.state.username}</h1>
        <button type="button" class="btn btn-primary" onClick={this.handleChange}>Change Username </button>
        
     </>
    )
  }
}
