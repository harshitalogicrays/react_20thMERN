import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:"user",
initialState:{users:[],error:''},
reducers:{//pure function
    ADD_USER:(state,action)=>{},
    REMOVE_USER(state,action){},
    REMOVE_ALL_USERS(state,action){}
}
})
console.log(userSlice.actions)
export default userSlice