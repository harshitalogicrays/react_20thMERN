import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCategory = () => {
  const navigate = useNavigate()
  const [category,setCategory] =useState({name:'',desc:'',image:''})
  const handleImage=(e)=>{}
  const handleSubmit=async(e)=>{
    if(!category.name || !category.desc || !category.image){
      toast.error("please fill all the fields")
    }
    else {
      try{
        await axios.post(`${import.meta.env.VITE_BASE_URL}/categories`,{...category,createdAt:new Date()})
        toast.success("category added")
        navigate('/admin/category/view')
      }
      catch(err){toast.error(err.message)}
    }
  }
  return (
  <>
    <h1>Add Category</h1>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input type="text"  name="name"  class="form-control" value={category.name} 
        onChange={(e)=>setCategory({...category,name:e.target.value})}/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Image</label>
        <input type="file"  name="image"  class="form-control" onChange={handleImage}/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">desc</label>
        <textarea type="text"  name="desc"  class="form-control" value={category.desc} 
        onChange={(e)=>setCategory({...category,desc:e.target.value})}></textarea>
      </div>
      <button type="submit" class="btn btn-primary"> Submit </button>
      
    </form>
  </>
  )
}

export default AddCategory
