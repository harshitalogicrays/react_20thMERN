import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { ContextCart } from './CartContext';
import { toast } from 'react-toastify';
const Cart = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = ContextCart()
  const {cartItems,total,increase,decrease,removefromcart,emptycart,calculatetotal} = data
  useEffect(()=>{
    calculatetotal()
  },[cartItems])

  const handleCheckout=async()=>{
    if(cartItems.length !=0){
    if(sessionStorage.getItem("20thjunmini") !=null){
      let data = JSON.parse(sessionStorage.getItem("20thjunmini"))
      let obj = {cartItems , total , status:"Order Placed",ordeDate:new Date().toLocaleDateString(),orderTime:new Date().toLocaleTimeString(),userEmail:data.email,userName:data.name}
        try{
          await fetch("http://localhost:1000/orders",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(obj)
          })
          toast.success("order placed")
          emptycart()
          navigate('/')
        }
        catch(error){toast.error(error.message)}

    }
    else {
      // console.log(location)
      navigate('/login',{state:{from:location.pathname}})
    }
  }

  }
      return (
      <div className="max-w-7xl mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
              {cartItems.length==0 && <h1 className='text-center text-2xl'>No Item in Cart</h1>}
              {cartItems.map((cart)=>
              <div className="flex items-center justify-between py-6 border-b border-gray-200" key={cart.id}>
                <div className="flex items-center gap-6">
                  <img src={cart.images[0]} alt={cart.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{cart.title}</h2>
                    <p className="text-gray-600">Price: ${cart.price}</p>
                    <p className="text-gray-600">Total Price: ${cart.price*cart.qty}</p>
                    <div className="flex items-center mt-4">
                      <button type="button"  className="w-6 p-2 border border-gray-300 rounded-lg text-center"
                      onClick={()=>decrease(cart)}>-</button>
                        <input  type="number"  value={cart.qty} readOnly
                        className="w-16 p-2 border border-gray-300 rounded-lg text-center"
                      />
                      <button type="button" className="w-6 p-2 border border-gray-300 rounded-lg text-center"
                      onClick={()=>increase(cart)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" onClick={()=>removefromcart(cart)}>
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
              )}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">${(total==0 ||total > 50) ? "0.00" : "5.00"}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-6">
              <span>Total</span>
              <span className="text-gray-900">${(total==0 || total > 50) ? total.toFixed(2) : (total+5).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
            <button className="mt-8 w-full bg-red-600 text-white py-3 me-2 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-200" onClick={()=>emptycart()}>
                Empty Cart
              </button>
              <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart