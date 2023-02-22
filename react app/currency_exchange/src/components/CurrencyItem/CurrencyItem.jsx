import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, getCurrency } from '../../store/currencySlice';
import { LineWave } from "react-loader-spinner";

import styles from './CurrencyItem.module.scss';

export const CurrencyItem = ({currency, rate, title,className}) =>{
const dispatch = useDispatch()


// console.log(currencies)
// if(!Object.keys(currencies).includes(currency)) return<> <LineWave  wrapperClass={styles.currencyItem}  height='30' /></>
  return (
  <div className={`${styles.currencyItem} ${className}`}>
  {title}: {rate}
  </div>
)};

