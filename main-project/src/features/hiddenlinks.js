import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/authSlice"

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