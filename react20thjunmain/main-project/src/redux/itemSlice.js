import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name:'item',
    initialState:{items:[]},
    reducers:{
        STORE_ITEMS(state,action){
            state.items = action.payload
        }
    }
})
export const {STORE_ITEMS} = itemSlice.actions
export default itemSlice.reducer
export const selectItems = state=>state.item.items