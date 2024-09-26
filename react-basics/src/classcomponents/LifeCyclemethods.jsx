import React, { Component } from 'react'

export default class LifeCyclemethods extends Component {
    constructor(props) {
      super(props)
        console.log("constructor called")
      this.state = {username:"Harshita"}
      this.timer =''
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called")
        return {state}
    }
    componentDidMount(){
      this.timer =   setInterval(()=>{
            console.log("setInterval called")
        },4000)
        console.log("componentDidMount called")
    }

    handleChange=()=>{
        console.log("handleChange called")
        this.setState({username:"Siya"})
    }
    shouldComponentUpdate(prevState,nextState){
        console.log("shouldComponentUpdate called",prevState,nextState)
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
        clearInterval(this.timer)
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
