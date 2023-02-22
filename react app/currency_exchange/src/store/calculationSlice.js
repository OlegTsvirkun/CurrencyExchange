import { createSlice } from "@reduxjs/toolkit";



const calculationSlice = createSlice({
    name: 'calculation',
    initialState: {
        GiveValue: 100,
        GetValue: 1,

        GiveCurrency: '',
        GetCurrency: 'UAH',

        GetRate: 1,
        GiveRate: 0,

        GiveCurrencyOpt: [],
        GetCurrencyOpt: [],
    },
    reducers: {
        setGiveValue: (state, action) => {
            state.GiveValue = action.payload
        },
        setGetValue: (state, action) => {
            state.GetValue = action.payload

        },
        setGetRate: (state, action) => {
            state.GetRate = action.payload

        },
        setGiveRate: (state, action) => {
            state.GiveRate = action.payload

        },
        setGiveCurrency: (state, action) => {
            state.GiveCurrency = action.payload

        },
        setGetCurrency: (state, action) => {
            state.GetCurrency = action.payload

        },
        setGiveCurrencyOpt: (state, action) => {
            state.GiveCurrencyOpt = action.payload

        },
        setGetCurrencyOpt: (state, action) => {
            state.GetCurrencyOpt = action.payload

        },


    }
})
export const { setGiveValue, setGetValue, setGetRate, setGiveRate, setGetCurrency, setGiveCurrency, setGetCurrencyOpt, setGiveCurrencyOpt } = calculationSlice.actions;
export default calculationSlice.reducer