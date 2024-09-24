import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Statedemoinclass extends Component {
  constructor(props) {
    super(props)
    this.state = {count:'',num1:2,num2:1,result:''}
  }
  handleCounter=()=>{
    this.setState({count:parseInt(this.state.count+1)})
  }
  handleAdd=()=>{
    this.setState({result:this.state.num1+this.state.num2})
  }
  render() {
    return (
      <>
        <Button onClick={this.handleCounter}>Counter</Button>
        <h1>{this.state.count}</h1>

        <Button onClick={this.handleAdd}>Addition</Button>
        <h2>{this.state.result}</h2>
      </>
    )
  }
}
