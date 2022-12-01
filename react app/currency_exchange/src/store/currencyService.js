// https://api.monobank.ua/bank/currency

import axios from 'axios'
import { cur } from '../curr';
import { newCurrArr } from '../func';
const iso = [{
    "code":"USD",
    "name":"United States dollar",
    "number":"840"
},
{
    "code":"EUR",
    "name":"Euro",
    "number":"978"
},
{
    "code":"UAH",
    "name":"Ukrainian hryvnia",
    "number":"980"
},]
const getCurrency = async ()=>{
   
        const currency = await axios(
            // 'https://api.monobank.ua/bank/currency'
            'https://638888e4a4bb27a7f78a04ec.mockapi.io/currency'
            )
            const currencyData = await currency.data
            const res = []
            res.push(currencyData[0],currencyData[1],currencyData[2])
            console.log(res);
        return newCurrArr(res)
}
    
   
const currencyService = {
    getCurrency
}
export default currencyService