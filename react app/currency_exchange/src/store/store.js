import {configureStore} from '@reduxjs/toolkit'
import currencySlice from './currencySlice'
import formDataSlice from './formDataSlice'

export const store = configureStore({
    reducer:{
        currency: currencySlice,
        formData: formDataSlice
    }
})