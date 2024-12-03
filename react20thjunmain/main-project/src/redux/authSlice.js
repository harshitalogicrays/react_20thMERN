import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name:'auth',
initialState:{isLoggedIn:false, userEmail:'',userId:'',userRole:'',userName:''},
reducers:{
    LOGIN_USER(state,action){
        let {userEmail,userName,userId,userRole}  = action.payload
         state.isLoggedIn = true; state.userEmail=userEmail;
        state.userName=userName;state.userId=userId;state.userRole=userRole
    },
    LOGOUT_USER(state,action){
        state.isLoggedIn = false; state.userEmail='';
        state.userName='';state.userId='';state.userRole=''
    }
}
})

export const {LOGIN_USER,LOGOUT_USER}=authSlice.actions
export default authSlice.reducer
export const selectIsLoggedIn = state=>state.auth.isLoggedIn
export const selectUserName = state=>state.auth.userName
export const selectUserEmail = state=>state.auth.userEmail
export const selectUserRole = state=>state.auth.userRole
export const selectUserId = state=>state.auth.userId