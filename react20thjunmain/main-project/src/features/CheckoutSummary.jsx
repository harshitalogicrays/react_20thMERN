import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotal } from '../redux/cartSlice'

const CheckoutSummary = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotal)
  return (
   <>
      <h1>Checkout Summary</h1> <hr/>
     <ul className='list-group'>
      {cartItems.map((item,index)=>
        <li class="list-group-item" key={index}>
            <div>
                <h5>{item.name}</h5>
                <p><b>Size: </b>{item.size} &emsp;<b>Color: </b>{item.color}<br/>
                <b>Price: </b>{item.price}<br/>
                <b>Quantity: </b>{item.qty}<br/>
                {item.qty > 1 && <><b>Total Price : </b> {item.price*item.qty}</>}
                </p>
            </div>
        </li>
    )}
      <li class="list-group-item"><span className='float-end'>${total}</span></li>
    </ul> 
   </>
  )
}

export default CheckoutSummary
