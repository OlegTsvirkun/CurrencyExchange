import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import currencyService from "./currencyService";

export const getCurrencies = createAsyncThunk('GET_CURRENCIES',async (_,thunkAPI)=>{
    try {
        return await currencyService.getCurrency()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const currencySlice = createSlice({
    name: 'currencies',
    initialState:{
        currencies:[],
        isLoading:true,
        isError:false,
        message: ''
    },
    extraReducers:(builder)=>{
        builder.addCase(getCurrencies.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(getCurrencies.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.isLoading = false;
            state.currencies = action.payload;
        })
        builder.addCase(getCurrencies.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            // state.message = action.payload.message;
            state.planes = null;
        
        })
    }
})

export default currencySlice.reducer