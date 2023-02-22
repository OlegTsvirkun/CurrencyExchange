// export const currenciesList = (arr) => {
//     let set = new Set()
//     arr.forEach(el => {
//         set.add(el.currencyCodeA)
//         set.add(el.currencyCodeB)
//     });
//     return Array.from(set)
// }

// export const calcGetCur = (dbCurrencies, giveValue, giveCur, getCur) => {
//   let filtered =  dbCurrencies.filter(item => {
//         // console.log('giveCur', giveCur,  'getCur', getCur );
//         if ((item.currencyCodeA ==getCur  && item.currencyCodeB == giveCur) || (item.currencyCodeB ==getCur  && item.currencyCodeA == giveCur) ) {
          
//             return item 
//         }
//     })
//     console.log(filtered);
//     const {currencyCodeA , currencyCodeB, rateBuy,rateSell} = filtered[0]
//    if (currencyCodeA ==giveCur  && currencyCodeB == getCur) {
       
//     let calc = giveValue* rateBuy
// console.log(calc);
//     return calc
//    }else if (currencyCodeA ==getCur  && currencyCodeB == giveCur) {
       
//     let calc = giveValue / rateSell
// console.log(calc);
//     return calc
//    }

// }