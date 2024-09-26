import React, { Component } from 'react'
import Childforref from './Childforref'
import ForwardRefdemo from './forwardRefdemo'

export default class RefDemoinclass extends Component {
    constructor(props) {
      super(props)
      this.state = {username:"Ram"}
        this.myRef = React.createRef()
        this.focusRef = React.createRef()
    }
    handleDecrease = ()=>{
        this.myRef.current.value > 1 ? this.myRef.current.value-- : this.myRef.current.value=1
    }
  render() {
    return (
      <>
        <div className="input-group mt-5 ms-5">
            <button type="button" className='btn btn-primary' onClick={this.handleDecrease}>-</button>
            <div className="col-1">
            <input className='form-control text-center' defaultValue={1} ref={this.myRef}/>
            </div>
            <Childforref name={this.state.username} innerRef = {this.myRef}/>
        </div>

        <ForwardRefdemo  
         name={this.state.username}
         ref={this.focusRef}/>
       <button type="button" className='btn btn-primary' 
       onClick={()=>this.focusRef.current.focus()}>
        focus on forwarded ref</button>
      </>
    )
  }
}
