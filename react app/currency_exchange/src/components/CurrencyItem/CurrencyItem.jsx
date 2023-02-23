import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, getCurrency } from '../../store/currencySlice';
import { LineWave } from "react-loader-spinner";

import styles from './CurrencyItem.module.scss';

export const CurrencyItem = ({currency, rate, title,className}) =>{
const dispatch = useDispatch()



  return (
  <div className={`${styles.currencyItem} ${className}`}>
    <div>{title}:</div><div>{rate} uah</div>
   
  </div>
)};

