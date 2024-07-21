import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const {getTotalAmount} = useContext(StoreContext);
  return (
   <form action="" className='place-order'>
    <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
            <input type="text" placeholder='first-name'/>
            <input type="text" placeholder='last-name'/>
        </div>
        <input type="text" placeholder='email address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
            <input type="text" placeholder='city'/>
            <input type="text" placeholder='state'/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='zip-code'/>
            <input type="text" placeholder='country'/>
        </div>
        <input type="" placeholder='phone '/>
    </div>
    <div className="place-order-right">
    <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivey fee</p>
                <p>₹{20}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₹{getTotalAmount()+20}</p>
                </div>    
              </div>
                <button>PROCEED TO PAYMENT</button>        
          </div>
    </div>
   </form>
  )
}

export default PlaceOrder