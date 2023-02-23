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
                <div className={styles.title}>Курс валют</div>
                <div className={styles.description}>Тут ви можете отримати усю інформацію з операцій по валюті
                </div>

                <table className={styles.item}>
                   <thead>
                      <tr>
                          <th className={styles.currency}>Валюта</th>
                          <th >Код</th>
                          <th>Курс</th>
                          <th>Наявність</th>
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

