import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import { toast } from 'react-toastify'
import { saveorder } from './hiddenlinks'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { emptycart, selectCartItems, selectTotal } from '../redux/cartSlice'
import { selectUserId } from '../redux/authSlice'
import { selectCheckout } from '../redux/CheckoutSlice'

const PaymentForm = ({clientsecret}) => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector(selectUserId)
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectTotal)
  const shippingAddress = useSelector(selectCheckout)
  const handleSubmit=async(e)=>{
    if(!stripe || !elements){
      toast.error("Stripe is not initialized");return }
    try{
      let cardElement = elements.getElement(CardElement)
      stripe.confirmCardPayment(clientsecret,{
        payment_method:{card:cardElement}
      }).then((result)=>{
          if(result.paymentIntent.status=="succeeded"){
            toast.success("Payment done")
            saveorder({shippingAddress,userId,cartItems,total,status:"in progress",paymentMethod:"online"})
            dispatch(emptycart())
            navigate('/thankyou')   }
          else if(result.error){console.log(result.error)} })  }
    catch(err){console.log(err);toast.error("An error occured during payment")}
  }
  return (
    <> <CardElement className='form-control'/>
    <div className="d-grid mt-3"> 
      <button type="button" onClick={handleSubmit} disabled={!stripe} className='btn btn-primary'>Pay Now</button>
    </div></>
  )
}

export default PaymentForm
