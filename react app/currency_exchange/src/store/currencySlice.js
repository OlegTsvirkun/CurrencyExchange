import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import currencyService from "./currencyService";

export const getCurrency = createAsyncThunk('GET_CURRENCIES',async ({currency,date},thunkAPI)=>{
    try {
        return await currencyService.getCurrency(currency,date)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const currencySlice = createSlice({
    name: 'currency',
    initialState:{
        currencies:{
            UAH:{
                txt: "Українська гривня",
                rate:1,
                cc:'UAH'
            }
        },
        isLoading:true,
        isError:false,
        message: ''
    },
    extraReducers:(builder)=>{
        builder.addCase(getCurrency.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(getCurrency.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.isLoading = false;
            state.currencies = {...state.currencies, ...action.payload};
        })
        builder.addCase(getCurrency.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.currencies = [];
        
        })
    }
})

export default currencySlice.reducer