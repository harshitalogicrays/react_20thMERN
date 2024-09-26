import React, { Component } from 'react'

export default class Childforref extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name} */}
        <button type="button" className='btn btn-primary' 
            onClick={()=>this.props.innerRef.current.value++}>+</button>
      </div>
    )
  }
}
