import React, { useEffect, useState } from 'react'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchCategories, selectCategories, selectError, selectStatus } from '../../redux/categorySlice'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewCategory = () => {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(fetchCategories())},[])
  const categories  = useSelector(selectCategories)
  const status = useSelector(selectStatus)
  const error = useSelector(selectError)

  let handleDelete=async(id)=>{
    if(window.confirm('are you sure to delete this??')){
      try{
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/categories/${id}`)
        toast.success("category deleted")
        window.location.reload()
      }
      catch(err){toast.error(err.message)}
    }
  }
  return ( <div> <h1 className='text-center'>Categories</h1><hr/>
        <div  class="table-responsive" >
          <table class="table table-bordered table-striped table-hover"   >
            <thead>
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th>Desc</th>
                <th>Action</th>
              </tr>
            </thead>
              <tbody>
                {status =="failed" && <tr><td colspan={5}>{error}</td></tr> }
                {status=="loading" && <h1>Loading</h1>}
                {status=="successed" && 
                <> {categories.length==0 && <tr><td colspan={5}>No Category Found</td></tr>}
                {categories.map((c,i)=>
                <tr key={c.id}>
                  <td scope="row">{i+1}</td>
                  <td>{c.name}</td>
                  <td><img src={c.image} height={50} width={50}/></td>
                  <td>{c.desc}</td>
                  <td>
                    <Link type="button" class="btn btn-success me-2" 
                    to={`/admin/category/edit/${c.id}`}><BsPencilSquare/></Link>
                    <button type="button" class="btn btn-danger" 
                    onClick={()=>handleDelete(c.id)}><BsTrash/></button>
                  </td>
                </tr>)}</>
                }
              </tbody>
          </table>
        </div>
        
    </div>
  )
}

export default ViewCategory
