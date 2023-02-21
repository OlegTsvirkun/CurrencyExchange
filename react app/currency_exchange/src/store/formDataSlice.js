import { createSlice } from "@reduxjs/toolkit";



const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        optionsGiveValue:[],
        optionsGetValue:["UAH"],
        giveValue: null,
        getValue: null,
        giveCurrency: '',
        getCurrency: '',

    },
    reducers: {
        setGiveValue: (state, action) => {
            state.giveValue = action.payload
        },
        setGetValue: (state, action) => {
            state.getValue = action.payload
        },
        setOptionsGetValue: (state, action) => {
            state.optionsGetValue = action.payload
        },
        setOptionsGiveValue: (state, action) => {
            state.optionsGiveValue = action.payload
        },
        setGiveCurrency: (state, action) => {
            state.giveCurrency = action.payload
        },
        setGetCurrency: (state, action) => {
            state.getCurrency = action.payload
        },
    
    }
})
export const { setGiveValue, setGetValue, setGiveCurrency,setGetCurrency,setOptionsGetValue,setOptionsGiveValue } = formDataSlice.actions;
export default formDataSlice.reducer