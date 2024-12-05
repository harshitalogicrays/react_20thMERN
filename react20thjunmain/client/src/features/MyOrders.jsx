import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLoaderData } from 'react-router-dom'
import { storeorders } from '../redux/orderSlice'
import { selectUserId } from '../redux/authSlice'

const MyOrders = () => {
  const allorders = useLoaderData()
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(storeorders(allorders))
    },[])
const userId = useSelector(selectUserId)
const orders = allorders.filter(item=>item.userId == userId)
  return (
    <div className='container mt-5'>
      <h1>My Orders</h1> <hr/>
      <div class="table-responsive mt-3"  >
        <table class="table table-bordered table-striped" >
          <thead>
            <tr>
              <th scope="col">OrderId</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Payment Method</th>
              <th>Order Date and Time</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {orders.length==0 && <tr><td colSpan={6}>No order found</td></tr>}
            {orders.map((order,index)=>
            <tr key={index}>
              <td scope="row">{order.id}</td>
              <td>{order.total}</td>
              <td>{order.paymentMethod}</td>
              <td scope="row">{order.orderDate} at {order.orderTime}</td>
              <td>
                <p className={`${order.status == 'delivered' ? 'text-success':'text-danger'}`}> {order.status}</p>
               </td>
              <td>
                <Link type="button"  to={`/myorders/${order.id}`} class="btn btn-primary"> View </Link>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default MyOrders
