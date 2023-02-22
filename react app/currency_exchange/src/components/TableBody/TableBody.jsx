import React from 'react';
import styles from './TableBody.module.scss';

export const TableBody = ({txt,rate,cc}) =>{
 if(cc!='UAH') return (
  
    <tr key = {rate+cc}>
                       
                        <td>{txt}</td>
                        <td>{cc}</td>
                        <td>{rate}</td>
                        <td>yes</td>
                    </tr>
  
)};

