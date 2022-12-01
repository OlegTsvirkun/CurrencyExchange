import React from 'react';
import styles from './CurrencyTable.module.scss';

export const CurrencyTable = ({}) => (
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
                      </tr>
                    </tbody>
                </table>
            </div>
  </div>
);

