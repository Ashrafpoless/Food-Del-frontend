// React
import { useState } from 'react'
 import PropTypes from 'prop-types'

 // Component
import './LoginPopup.css'

 // Assets
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='login'>
        <form action="" className="login-container">
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-input">
                {currentState === "Login" ? <> </> : <input type="text" placeholder='Your Name' required/> }

                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
                <button>{currentState === "Sign Up" ? "Create an account" :  "Login" }</button>
                <div className="login-condition">
                    <input type="checkbox" required/>
                    <p>By continuing , I agree to the terms of uses & privacy policy.</p>
                </div>
                {currentState === "Login" 
                ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Already have an account! <span onClick={() => setCurrentState("Login")}>Login here</span> </p>
                }
        </form>

    </div>
  )
}

LoginPopup.propTypes = {
      setShowLogin: PropTypes.func
    
}

export default LoginPopup