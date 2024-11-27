import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectUserRole } from "../redux/authSlice"
import { Navigate } from "react-router-dom"

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
    else return <Navigate to='/login' replace={true}/>
}

export const Protected = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectUserRole)
    if(isLoggedIn && role=="1"){return children}
    else return <Navigate to='/login' replace={true}/>
}