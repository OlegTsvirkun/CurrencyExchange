import curList from '../const/headerList.json'
// https://api.monobank.ua/bank/currency?valcode=EUR&date=YYYYMMDD
const date = new Date

import axios from 'axios'
const getCurrency = async ()=>{
   
        const {data} = await axios.get(
            // `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`
           'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
            )
            // console.log(data)
         return   data
         .reduce((acc, item)=>{
            curList.forEach(value=>{
                if(item['cc']==value)
                acc[item.cc] = item
            })
                return acc
            },{})
}
    
   
const currencyService = {
    getCurrency
}
export default currencyService