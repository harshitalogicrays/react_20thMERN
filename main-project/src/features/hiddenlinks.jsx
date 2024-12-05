import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectUserId, selectUserRole } from "../redux/authSlice"
import { Navigate,  } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

export const ShowonLogin=({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn){return children}
    else return null
}

export const Showonlogout = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(!isLoggedIn){return children}
    else return null
}

export const ProtectedAdmin = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectUserRole)
    if(isLoggedIn && role=="0"){return children}
    else return <Navigate to='/login'  replace={true}/>
}

export const Protected = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectUserRole)
    if(isLoggedIn && role=="1"){return children}
    else return <Navigate to='/login' replace={true}/>
}


export const saveorder = ({shippingAddress,userId,cartItems,total,paymentMethod,status,email})=>{
    let order = async()=>{
        try{
            await axios.post(`${import.meta.env.VITE_BASE_URL}/orders`,{shippingAddress,userId,cartItems,total,paymentMethod,status,createdAt:new Date() ,orderDate:new Date().toLocaleDateString() , orderTime:new Date().toLocaleTimeString(),email})
            toast.success("order placed")
        }
        catch(err){
            toast.error(err.message)
        }
}
    order()
}


export const allorders = async()=>{
    try{
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/orders`)
        return res.data
    }
    catch(err){console.log(err)}
}

export const sendmail = ({email,name,status,amount,payment})=>{
    let sendm = async()=>{
        try{
            const res = await axios.post(`${import.meta.env.VITE_NODE_URL}/mail`,{email,name,status,amount,payment})
            toast.success(res.data.message)
        }
        catch(err){
            toast.error(err.message)
        }
}
    sendm()
}
