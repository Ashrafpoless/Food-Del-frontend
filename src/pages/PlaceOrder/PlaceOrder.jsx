// react
import { useContext,  useEffect,  useState } from 'react'

// react router Dom
import { useNavigate } from 'react-router-dom'

// context
import { StoreContext } from '../../context/StoreContext'

//package
import axios from 'axios'


// components
import  './PlaceOrder.css';


const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItems} = useContext(StoreContext)
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  })
  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value
    setData(data => ({...data,[name]: value})) 
  }

  const placeOrder = async(e)=>{
    e.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id] >0){
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount()+2,
    }
    let res = await axios.post(import.meta.env.VITE_SERVER_URL+"/api/order/place", orderData, {headers : {token}})
    if(res.data.success){
      const {session_url} = res.data;
      window.location.replace(session_url) ;
    }else{
      alert("Error") ;
    }
  }

  useEffect(() =>{
    if(!token){
      navigate('/cart')
    }
    else if (getTotalCartAmount() === 0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">

        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name'/>
          <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last Name'/>
        </div>
        
        <input required type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email'/>
        <input required type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street'/>

        <div className="multi-fields">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City'/>
          <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State'/>
        </div>

        <div className="multi-fields">
          <input required type="text" name='postcode' onChange={onChangeHandler} value={data.postcode} placeholder='Post Code'/>
          <input required type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country'/>
        </div>
        <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone Number'/>
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

