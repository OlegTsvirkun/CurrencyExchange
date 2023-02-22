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
                          <th>Rate</th>
                          <th>Order</th>
                      </tr>
                   </thead>
                   <tbody>
                   {
                   Object.keys(currencies).map(key=><TableBody key ={key}  {...currencies[key]}/>)
                   }
                    </tbody>
                </table>
            </div>
  </div>
)
                    }
};

