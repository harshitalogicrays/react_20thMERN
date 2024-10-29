import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCategory = () => {
  const navigate = useNavigate()
  const [category,setCategory] =useState({name:'',desc:'',image:''})

  const [picLoading,setPicLoading]=useState(false)
  const handleImage=async(e)=>{
    // console.log(e.target.files[0])
    let img = e.target.files[0]
    setPicLoading(true)
    if(img==undefined){toast.error("please select an image")}
    if(img.type=='image/jpg' || img.type=='image/jpeg'|| img.type=='image/jfif' ||img.type=='image/png' || img.type=='image/gif' || img.type=='image/webp'){
      const data = new FormData()
      data.append("file",img)
      data.append("upload_preset","menswear")
      data.append('cloud_name','harshitalogicraysacademy')
      try{
       const res =  await axios.post("https://api.cloudinary.com/v1_1/harshitalogicraysacademy/image/upload",data)
        console.log(res.data.url)
        setCategory({...category,image:res.data.url})
        setPicLoading(false)
      }
      catch(err){
        toast.error(err.message)
        setPicLoading(false)
      }
    }

  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
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
  <div className='container col-8 mt-3 p-2 shadow'>
    <h1>Add Category</h1>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input type="text"  name="name"  class="form-control" value={category.name} 
        onChange={(e)=>setCategory({...category,name:e.target.value})}/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Image</label>
        <input type="file"    class="form-control" name="pic" accept='image/*'
            onChange={handleImage}/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">desc</label>
        <textarea type="text"  name="desc"  class="form-control" value={category.desc} 
        onChange={(e)=>setCategory({...category,desc:e.target.value})}></textarea>
      </div>
      <div className="d-grid gap-3">
      <button type="submit" class="btn btn-primary"> 
        {picLoading ? <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status">
                      </div>
                    </div>  : "Submit"}
        </button>
        </div>
    </form>
  </div>
  )
}

export default AddCategory
