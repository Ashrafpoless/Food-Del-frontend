// react
import { useContext } from 'react'

// context
import { StoreContext } from '../../context/StoreContext'

// components
import  './PlaceOrder.css'


const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">

        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>

        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Post Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone Number'/>
      </div>

      {/* / / / / / / / / / / / / /the right side / / / / / / / / / / / / / */}

      <div className="place-order-right">

      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

