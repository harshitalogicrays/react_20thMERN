import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ChangeOrderStatus = ({status,id,order}) => {
    let [ostatus,setOStatus] =useState(status)
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()   
        try{
            await axios.put(`${import.meta.env.VITE_BASE_URL}/orders/${id}`,{...order,status:ostatus,createdAt:order.createdAt ,editedAt:new Date()})
            toast.success("order updated")
            navigate('/admin/orders')
        }
        catch(err){
            toast.error(err.message)
        }
    }
  return (
    <>
    <h3>Update Order Status</h3><hr/>
    <form onSubmit={handleSubmit}>
    <div class="mb-3 col-6">
        <label for="" class="form-label">Status</label>
        <select class="form-select" value={ostatus} onChange={(e)=>setOStatus(e.target.value)} >
            <option>in progress</option>
            <option>placed</option>
            <option>shipped</option>
            <option>cancelled</option>
            <option>delivered</option>
            <option>processing</option>
        </select>
        <button  type="submit"class="btn btn-primary mt-3"  > Update   </button>
        
        </div>
        </form>
    
   </>
   )
}

export default ChangeOrderStatus
