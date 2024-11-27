import React, { useState } from 'react'
import CheckoutSummary from './CheckoutSummary'

const Checkout = () => {
    const [shippingAddress,setShippingAddress] = useState({
        name:"",email:"",mobile:"",address:"",city:"",postalcode:""
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(shippingAddress)
    }
  return (
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
                <input class="form-check-input" type="radio" name="payment"  value="cod" />
                <label class="form-check-label" for=""> cash on delivery </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="payment"  value="online"/>
                <label class="form-check-label" for=""> Pay Online</label>
            </div>
            <div className="row">
                <div className="col d-grid"> <button type="submit"  class="btn btn-primary"> Place Order </button></div>
                <div className="col d-grid"> <button type="reset"  class="btn btn-danger"> Cancel </button></div>
            </div>
       
           
            </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
