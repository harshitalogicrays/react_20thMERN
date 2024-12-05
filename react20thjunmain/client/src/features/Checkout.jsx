import React, { useState } from 'react'
import CheckoutSummary from './CheckoutSummary'
import { toast } from 'react-toastify'
import { saveorder, sendmail } from './hiddenlinks'
import { useDispatch, useSelector } from 'react-redux'
import { store_address } from '../redux/CheckoutSlice'
import { selectUserEmail, selectUserId } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { emptycart, selectCartItems, selectTotal } from '../redux/cartSlice'
import axios from 'axios'

import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);


const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userId = useSelector(selectUserId)
   const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotal)
    const userEmail = useSelector(selectUserEmail)

    const [shippingAddress,setShippingAddress] = useState({
        name:"",email:"",mobile:"",address:"",city:"",postalcode:""
    })
    const [paymentMethod,setPaymentMethod] =useState('')
    const [clientsecret,setClientsecret] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
       let {name,email,mobile,address,city,postalcode} = shippingAddress
       if(!name || !email ||!mobile || !address ||!city || !postalcode || !paymentMethod){
        toast.error("Please fill all the fields");return
       }    
       dispatch(store_address(shippingAddress))
       if(paymentMethod =="cod"){
            saveorder({shippingAddress,userId,cartItems,total,status:"in progress",paymentMethod:"cod",email:userEmail})
            sendmail({email:userEmail,name:shippingAddress.name,status:"in progress",amount:total,payment:"cod"})
            dispatch(emptycart())
            navigate('/thankyou')
       }
       else if(paymentMethod=="online"){
        //backend -> stripe payment api call -> clientsecret key 
        try{
            const res= await axios.post(`${import.meta.env.VITE_NODE_URL}/create-payment-intent`,{amount:total*100})
            console.log(res.data)
            setClientsecret(res.data.clientSecret)
            toast.success("payment initialized. Enter card details")
        }
        catch(err){toast.error(err.message)}
       }
    }
  return (
    <Elements stripe={stripePromise}>
        <div className='container mt-5 p-4 shadow'>
        <div className="row">
            <div className="col">
                <CheckoutSummary/>
            </div>
            <div className="col">
                <h1>Checkout Details</h1> <hr/>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Name</label>
                        <input type="text" name="name" class="form-control" value={shippingAddress.name} onChange={(e)=>setShippingAddress({...shippingAddress,name:e.target.value})}/>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Email</label>
                        <input type="text" name="email" class="form-control"  value={shippingAddress.email} onChange={(e)=>setShippingAddress({...shippingAddress,email:e.target.value})}/>
                    </div>
                    </div>
                    <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">mobile</label>
                        <input type="number" name="mobile" class="form-control"  value={shippingAddress.mobile} onChange={(e)=>setShippingAddress({...shippingAddress,mobile:e.target.value})}/>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">postalcode</label>
                        <input type="number" name="postalcode" class="form-control"  value={shippingAddress.postalcode} onChange={(e)=>setShippingAddress({...shippingAddress,postalcode:e.target.value})}/>
                    </div>
                    </div>
                    <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Address</label>
                        <textarea  name="address" class="form-control"  value={shippingAddress.address} onChange={(e)=>setShippingAddress({...shippingAddress,address:e.target.value})}></textarea>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">City</label>
                        <input type="text" name="city" class="form-control"  value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress,city:e.target.value})}/>
                    </div>
                    </div>

                <h2>Payment Method</h2>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="payment"  value="cod" 
                    checked={paymentMethod=="cod"}
                    onChange={()=>setPaymentMethod("cod")}/>
                    <label class="form-check-label" for=""> cash on delivery </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="payment"  value="online"
                    onChange={()=>setPaymentMethod("online")} checked={paymentMethod=="online"}/>
                    <label class="form-check-label" for=""> Pay Online</label>
                </div>
                {(paymentMethod=="online" && clientsecret) && <PaymentForm clientsecret={clientsecret}/>}
                <div className="row mt-2">
                    <div className="col d-grid"> <button type="submit"  class="btn btn-primary"> Place Order </button></div>
                    <div className="col d-grid"> <button type="reset"  class="btn btn-danger"> Cancel </button></div>
                </div>
        
            
                </form>
            </div>
        </div>
        </div>
    </Elements>
  )
}

export default Checkout
