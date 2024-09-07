import React, { useState } from 'react'
import Image1 from '../assets/images/register.png'
const FormValidations = () => {
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors]=useState({unamerr:'',emailerr:'',pwderr:'',cpwd:''})
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
    let checkusername=()=>{
        if(user.username==''){
            setErrors((prev)=>({...prev,unamerr:'username is required'}))
        }
        else { setErrors((prev)=>({...prev,unamerr:''}))}
    }
    let checkemail=()=>{
        if(user.email==''){
            setErrors((prev)=>({...prev,emailerr:'email is required'}))
        }
        else { setErrors((prev)=>({...prev,emailerr:''}))}
    }
  return (
   <div className='container mt-5 shadow p-3'>
    <h1>Form Validations</h1><hr/>
    <div className="row">
        <div className="col">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username"
                    value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} onBlur={checkusername}/>
                    {errors.unamerr && <span className='text-danger'>{errors.unamerr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
                    onBlur={checkemail}/>
                       {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword"
                    value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
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

export default FormValidations
