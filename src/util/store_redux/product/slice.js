import { createSlice } from "@reduxjs/toolkit";
import { getAllProduk, getDetail } from "./action";

export const productSlice =  createSlice({
    name:'product',
    initialState:{
        loading:false,
        entities:[],
        entity:{
            createAt:'',
            title:'',
            image:'',
            description:'',
            price:'',
        },
        error:null
    },
    extraReducers:(builder) => 
    builder
    .addCase(getAllProduk.pending,(state) =>{
        state.loading = true;
    })
    .addCase(getAllProduk.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload
    })
    .addCase(getAllProduk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
    // Detail
    .addCase(getDetail.pending,(state) =>{
        state.loading = true;
    })
    .addCase(getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload
    })
    .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
})

export default productSlice.reducer;