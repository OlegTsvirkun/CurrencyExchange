import React from 'react';
import styles from './TableBody.module.scss';

export const TableBody = ({txt,rate,cc}) =>{
 if(cc!='UAH') return (
  
    <tr key = {rate+cc}>
                       
                        <td>{txt}</td>
                        <td>{cc}</td>
                        <td>{typeof rate =='number' && rate.toFixed(2)} uah</td>
                        <td>так</td>
                    </tr>
  
)};

