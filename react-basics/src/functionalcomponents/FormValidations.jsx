import React, { useState } from 'react'
import Image1 from '../assets/images/register.png'
const FormValidations = () => {
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors]=useState({unamerr:'',emailerr:'',pwderr:'',cpwderr:''})
    let handleSubmit=(e)=>{
        let res1 = checkusername()
        let res2 = checkemail()
        let res3 = checkpwd()
        let res4 = checkcpwd()
        if(res1 && res2 && res3 && res4) alert(JSON.stringify(user))
        else e.preventDefault()
    }
    let checkusername=()=>{
        if(user.username==''){
            setErrors((prev)=>({...prev,unamerr:'username is required'}));return false
        }
        else { setErrors((prev)=>({...prev,unamerr:''}));return true}
    }
    let checkemail=()=>{
        let pattern =  /^[\w\.]+\@[\w]+\.[a-zA-Z]{2,3}$/
        if(user.email==''){
            setErrors((prev)=>({...prev,emailerr:'email is required'}));return false
        }
        else if (!pattern.test(user.email)){
            setErrors((prev)=>({...prev,emailerr:'invalid email'}));return false
        }
        else { setErrors((prev)=>({...prev,emailerr:''}));return true}
    }
    let checkpwd=()=>{
        if(user.password==''){
            setErrors((prev)=>({...prev,pwderr:'password is required'}));return false
        }
        else { setErrors((prev)=>({...prev,pwderr:''}));return true}
    }

    let checkcpwd=()=>{
        if(user.cpassword=='' || user.cpassword != user.password){
            setErrors((prev)=>({...prev,cpwderr:'mismatch password'}));return false
        }
        else { setErrors((prev)=>({...prev,cpwderr:''}));return true}
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
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} onBlur={checkpwd}/>
                      {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword"
                    value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})} onBlur={checkcpwd}/>
                      {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}
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
