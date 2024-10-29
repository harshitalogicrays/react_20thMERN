import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk('/category/fetchCategories',async(_,thunkAPI)=>{
    try{
        const res =  await fetch(`${import.meta.env.VITE_BASE_URL}/categories`)
        const data = await res.json()
        return data}
      catch(err){
        return thunkAPI.rejectWithValue(err.message) }
})

const categorySlice = createSlice({
    name:'category',
    initialState:{categories:[],error:'',status:''},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.pending ,(state,action)=>{
            state.status='loading' })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.status="successed"
            state.categories = action.payload})
        .addCase(fetchCategories.rejected,(state,action)=>{
            state.error = action.payload
            state.status="failed" })
    }
})
export default categorySlice.reducer
export const selectCategories = (state)=>state.category.categories
export const selectStatus = (state)=>state.category.status
export const selectError = (state)=>state.category.error