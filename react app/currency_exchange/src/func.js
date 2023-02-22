// import { isoCode } from "./ISO_cur";

// const getCurrencyCode = (value) => {
//     let val = "";
//     for (let key of isoCode) {
//         if (key.number == +value) val = key.code;
//     }
//     return val;
// };
// const getCurrencyName = (value) => {
//     let val = "";
//     for (let key of isoCode) {
//         if (key.number == +value) val = key.name;
//     }
//     return val;
// };

// export const newCurrArr = (arr) => {
//     return arr.reduce((acc, item) => {
//         	let currencyCodeA = getCurrencyCode(item.currencyCodeA);
// 			let currencyCodeB = getCurrencyCode(item.currencyCodeB);
// 			let currencyNameA = getCurrencyName(item.currencyCodeA);
// 			let currencyNameB = getCurrencyName(item.currencyCodeB);
// 			item.currencyCodeA = currencyCodeA;
// 			item.currencyCodeB = currencyCodeB;
// 			item.currencyNameA = currencyNameA;
// 			item.currencyNameB = currencyNameB;

//         acc.push(item);
//         return acc;
//     }, []);
// };