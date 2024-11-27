import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatetotal, decrease, emptycart, increase, removefromcart, selectCartItems, selectTotal } from '../redux/cartSlice'
import { BsTrash } from 'react-icons/bs'
import { selectIsLoggedIn } from '../redux/authSlice'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotal)
    const dispatch  = useDispatch()
    useEffect(()=>{
        dispatch(calculatetotal())
    },[cartItems])

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const handleCheckout=()=>{
        if(!isLoggedIn){
            toast.error("please login first")
            navigate('/login',{state:{to:location.pathname}})
        }
        else {
            navigate('/checkout')
        }
    }
  return (
    <div className='container mt-5 shadow p-3'>
        <h1>Cart Page</h1> <hr/>
        <div className="row">
                <div class="table-responsive"  >
                    <table  class="table table-bordered table-hover table-striped"  >
                        <thead>
                            <tr>
                                <th scope="col">Sr. No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th>Size</th><th>Color</th>
                                <th>Price</th><th>Quantity</th><th>Total Price</th><th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length ==0 && <tr><td colSpan={9}>No Item in Cart</td></tr>}
                            {cartItems.map((cart,index)=>
                             <tr key={index}>
                             <td scope="row">{index+1}</td>
                             <td>{cart.name}</td>
                             <td><img src={cart.images[0]} height={50} width={50}/></td>
                             <td>{cart.size}</td>
                             <td>{cart.color}</td>
                             <td>{cart.price}</td>
                             <td>
                                <div className="input-group">
                                    <button type="button" class="btn btn-primary" 
                                    onClick={()=>dispatch(decrease(cart))}>-</button>
                                    <input type="text" value={cart.qty} readOnly style={{width:'40px',textAlign:'center'}} />
                                    <button type="button" class="btn btn-primary"
                                     onClick={()=>dispatch(increase(cart))}>+</button>
                                </div></td>
                             <td>{cart.price * cart.qty}</td>
                             <td> <button type="button"  class="btn btn-danger"  
                             onClick={()=>dispatch(removefromcart(cart.id))}> <BsTrash/>  </button></td>
                         </tr>
                            )}
                           
                        </tbody>
                    </table>
                </div>
                
        </div>
        <div className="row mt-4">
            <div className="col-9">
                <button type="button"  class="btn btn-danger btn-lg"   onClick={()=>dispatch(emptycart())} >  Empty Cart  </button>
            </div>
            <div className="col">
                <h4>Total : <span className='float-end'>${total}</span></h4><hr/>
                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-warning" 
                    disabled={cartItems.length==0 && "true"} onClick={handleCheckout}> Checkout </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cart
