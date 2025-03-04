import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios";

// css
import "./Verify.css"
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId"); 

    const verifyPayment = async() =>{
        const res = await axios.post(import.meta.env.VITE_SERVER_URL+"/api/order/verify", {success, orderId});
        if(res.data.success){
            navigate("/myorders")
        }else{
            navigate("/")
        }
    }


    useEffect(()=>{
        verifyPayment()
    }, [])
  return (
    <div className="verify">
        <div className="spinner"></div>
    </div>
  )
}

export default Verify