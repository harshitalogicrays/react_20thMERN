import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/userSlice'

const Add = () => {
    const [user,setUser] =useState({username:'',email:'',mobile:''})
    const dispatch = useDispatch()
    const handleAdd = (e)=>{e.preventDefault()
        dispatch(ADD_USER(user))
        setUser({username:'',email:'',mobile:''})
    }
  return (
    <div>
        <h1>Add User</h1>
        <hr/>
        <form onSubmit={handleAdd}>
            <div class="mb-3">
                <label for="" class="form-label">Username</label>
                <input type="text" name="username" class="form-control" value={user.username} 
                onChange={(e)=>setUser({...user,username:e.target.value})}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value={user.email} 
                onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Mobile</label>
                <input type="text" name="mobile" class="form-control" value={user.mobile} 
                onChange={(e)=>setUser({...user,mobile:e.target.value})}/>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
     
      
    </div>
  )
}

export default Add
