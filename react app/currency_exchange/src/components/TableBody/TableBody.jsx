import React from 'react';
import styles from './TableBody.module.scss';

export const TableBody = ({currencyCodeA,currencyCodeB,rateBuy,rateSell}) =>{
  return (
  
    <tr key = {currencyCodeA}>
                        <td className={styles.table__currency}>{currencyCodeA} / {currencyCodeB}</td>
                        <td>{currencyCodeA}</td>
                        <td>{rateBuy}</td>
                        <td>{rateSell}</td>
                        <td>yes</td>
                    </tr>
  
)};

