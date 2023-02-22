// https://api.monobank.ua/bank/currency?valcode=EUR&date=YYYYMMDD
const date = new Date

import axios from 'axios'
const getCurrency = async (currency,date='20230221' )=>{
   
        const {data} = await axios.get(
            `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`
            )
         return   data.reduce((acc, item)=>{
                acc[item.cc] = item
                // console.log(acc)
                return acc
            },{})
        return data
}
    
   
const currencyService = {
    getCurrency
}
export default currencyService