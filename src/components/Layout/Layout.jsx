// react router dom
import { Outlet } from 'react-router-dom'

// react
import { useState } from "react";

// components
import LoginPopup from '../LoginPopup/LoginPopup'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> :  <> </> } 
        <Navbar setShowLogin={setShowLogin}/>
        <Outlet/>
        <Footer/>
    </>
  )
}



export default Layout