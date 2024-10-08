import React, { useState } from 'react'
import Image1 from '../assets/images/register.png'
const Form1 = () => {
    let [user,setUser] = useState({username:'ram',email:'ram@gmail.com',password:'aaaa',cpassword:'aaa'})

    let handleChange=(e)=>{
            setUser({...user, [e.target.name]:e.target.value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
  return (
   <div className='container mt-5 shadow p-3'>
    <h1>Form Demo</h1><hr/>
    <div className="row">
        <div className="col">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username"
                    value={user.username} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"
                    value={user.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"
                    value={user.password} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword"
                    value={user.cpassword} onChange={handleChange}/>
                </div>
                <div className="d-grid gap-2">
                      <button  type="submit"  className="btn btn-primary" > Submit  </button>
                </div>
                
              
                
            </form>
        </div>
    </div>
   </div>
  )
}

export default Form1
