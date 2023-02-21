import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { TableBody } from '../TableBody';
import styles from './CurrencyTable.module.scss';

export const CurrencyTable = ({}) =>{ 

const { currencies, isLoading } = useSelector((state) => state.currency);

if(isLoading){
<>
    <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
</>
}
// const { USD, EUR, cross } = currencies.reduce((acc, item) => {
//   if (item.currencyCodeB == "UAH") acc[item.currencyCodeA] = item;
//   else acc['cross'] = item;
//   return acc;
// }, {});
// console.log('cross',cross);
else if(!isLoading){

  return(
   <div className={styles.currenciesRate}>
     <div className={styles.currenciesRate}>
                <div className={styles.currenciesRate__title}>Currency rate</div>
                <div className={styles.currenciesRate__description}>Get a full range of foreign exchange transactions and sales
                </div>

                <table className={styles.currenciesRate__item}>
                   <thead>
                      <tr>
                          <th className={styles.table__currency}>Currency</th>
                          <th >Code</th>
                          <th>Buy</th>
                          <th>Sell</th>
                          <th>Order</th>
                      </tr>
                   </thead>
                   <tbody>
                   {currencies.map(currencies=><TableBody key ={`${currencies.currencyCodeA}${currencies.rateBuy}  `}  {...currencies}/>)
                
                   }
                  
                      {/* <tr>
                          <td className={styles.table__currency}>U.S. dollar</td>
                          <td>USD</td>
                          <td>40.1500</td>
                          <td>40.1500</td>
                          <td>yes</td>
                      </tr>
                      <tr>
                          <td className={styles.table__currency}>Euro</td>
                          <td>EUR</td>
                          <td>42.1500</td>
                          <td>44.1500</td>
                          <td>yes</td>
                      </tr>
                      <tr>
                          <td className={styles.table__currency}>U.S. dollar</td>
                          <td>USD</td>
                          <td>40.1500</td>
                          <td>40.1500</td>
                          <td>yes</td>
                      </tr>
                      <tr>
                          <td className={styles.table__currency}>Euro</td>
                          <td>EUR</td>
                          <td>42.1500</td>
                          <td>44.1500</td>
                          <td>yes</td>
                      </tr> */}
                    </tbody>
                </table>
            </div>
  </div>
)
                    }
};

