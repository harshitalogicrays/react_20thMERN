import React, { Component } from 'react'

export default class Forminclass extends Component {
  constructor(props) {
    super(props)
    this.state = {
       user:{username:'',email:'',password:'',cpassword:''},
       errors:{unamerr:'',emailerr:'',pwderr:'',cpwderr:''}
    }
    this.focusRef = React.createRef()
  }
  handleChange=(e)=>{
    this.setState({
      user:{...this.state.user, [e.target.name]:e.target.value}
    })
  }

  checkusername=()=>{
     if(this.state.user.username==''){
      this.setState(prevState =>({errors:{...prevState.errors,unamerr:'username is required'}
        }))
        return false
    }    
    else{
      this.setState(prevState => ({
        errors:{...prevState.errors,unamerr:'',}
         }));return true}
}


checkemail=()=>{
  let pattern =  /^[\w\.]+\@[\w]+\.[a-zA-Z]{2,3}$/
  if(this.state.user.email==''){
    this.setState(prevState => ({
      errors:{...prevState.errors,emailerr:'email is required',}
       })) ;return false
  }
  else if (!pattern.test(this.state.user.email)){
    this.setState(prevState => ({
      errors:{...prevState.errors,emailerr:'invalid email',}
       }));return false
  }
  else {   this.setState(prevState => ({
    errors:{...prevState.errors,emailerr:'',}
     }));return true}
}
   handleSubmit=(e)=>{
    e.preventDefault()
    let uname = this.checkusername()
    let  email =this.checkemail()
    if(uname &&  email){
      alert(JSON.stringify(this.state.user))
    }
    else {e.preventDefault()}

}
componentDidMount(){ //once the comp has been loaded completely
  this.focusRef.current.focus()
}
  render() {
    return (
      <div className=''>
    <h1>Form Validations</h1><hr/>
    <div className="row">
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username"  ref={this.focusRef}
                    value={this.state.user.username}
                    onChange={this.handleChange}
                    onBlur={this.checkusername}
                   />
                   {this.state.errors.unamerr && <span className='text-danger'>{this.state.errors.unamerr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"
                      value={this.state.user.email}
                      onChange={this.handleChange} onBlur={this.checkemail}
                   />
                      {this.state.errors.emailerr && <span className='text-danger'>{this.state.errors.emailerr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"
                      value={this.state.user.password}
                      onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword"
                      value={this.state.user.cpassword}
                      onChange={this.handleChange}
                   />
                    
                </div>
                <div className="d-grid gap-2">
                      <button  type="submit"  className="btn btn-primary" > Submit  </button>
                </div>
                
              
                
            </form>
        </div>
    </div>
    )
  }
}
