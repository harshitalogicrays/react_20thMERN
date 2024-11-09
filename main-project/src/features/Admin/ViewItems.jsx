import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, STORE_ITEMS } from '../../redux/itemSlice'
import { Link } from 'react-router-dom'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { toast } from 'react-toastify'
import axios from 'axios'

const ViewItems = () => {
  const dispatch = useDispatch()

  const getData = async()=>{
    try{
      const res  = await fetch(`${import.meta.env.VITE_BASE_URL}/products`)
      const data  =await res.json()
      dispatch(STORE_ITEMS(data))
    }
    catch(err){console.log(err)}
  }

  useEffect(()=>{getData()},[])

  const items = useSelector(selectItems)

  let handleDelete=async(id)=>{
    if(window.confirm('are you sure to delete this??')){
      try{
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
        toast.success("item deleted")
        getData()
      }
      catch(err){toast.error(err.message)}
    }
  }
  return (
    <div> <h1 className='text-center'>Items</h1><hr/>
    <div  class="table-responsive" >
      <table class="table table-bordered table-striped table-hover"   >
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th>Category</th>
            <th>brand</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Sizes</th>
            <th>colors</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
           {items.length==0 && <tr><td colspan={5}>No Item Found</td></tr>}
            {items.map((c,i)=>
            <tr key={c.id}>
              <td scope="row">{i+1}</td>
              <td>{c.category}</td>
              <td>{c.brand}</td>
              <td>{c.name}</td>
              <td><img src={c.images[0]} height={50} width={50}/></td>
              <td>{c.price}</td>
              <td>{c.stock}</td>
              <td>{c.sizes.map((s,i)=><span class="badge rounded-pill text-bg-primary me-1">{s}
                </span>
              )}</td>
              <td>{c.colors}</td>
              <td>
                <Link type="button" class="btn btn-success me-2" 
                to={`/admin/item/edit/${c.id}`}><BsPencilSquare/></Link>
                <button type="button" class="btn btn-danger" 
                onClick={()=>handleDelete(c.id)}><BsTrash/></button>
              </td>
            </tr>)}
          </tbody>
      </table>
    </div>
    
</div>
  )
}

export default ViewItems
