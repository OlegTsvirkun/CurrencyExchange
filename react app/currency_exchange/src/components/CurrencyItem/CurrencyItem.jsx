import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, getCurrency } from '../../store/currencySlice';
import { LineWave } from "react-loader-spinner";

import styles from './CurrencyItem.module.scss';

export const CurrencyItem = ({currency, date,className}) =>{
const dispatch = useDispatch()
const {currencies} = useSelector(state=>state.currency)
useEffect(()=>{
  dispatch(getCurrency({currency, date}))
},[])

// console.log(currencies)
if(!Object.keys(currencies).includes(currency)) return<> <LineWave  wrapperClass={styles.currencyItem}  height='30' /></>
  return (
  <div className={`${styles.currencyItem} ${className}`}>
  {currencies[currency].cc}: {(currencies[currency].rate).toFixed(2)}
  </div>
)};

