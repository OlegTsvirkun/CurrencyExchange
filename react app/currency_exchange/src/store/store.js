import {configureStore} from '@reduxjs/toolkit'
import currencySlice from './currencySlice'
import calculationSlice from './calculationSlice'

export const store = configureStore({
    reducer:{
        currency: currencySlice,
        calculation: calculationSlice
    }
})