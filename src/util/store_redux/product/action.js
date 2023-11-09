import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from '../../http/service';

export const getAllProduk = createAsyncThunk('feat/getAllProducts', async () => {
    try {
        const response = await httpService.get('/product');
        return response.data;
    } catch (error) {
        throw error;
    }
})

export const getDetail = createAsyncThunk('feat/getDetailProduct', async (productId) => {
    try {
        const response = await httpService.get(`/product/${productId}`);        
        return response.data;
    } catch (error) {
        throw error;
    }
})