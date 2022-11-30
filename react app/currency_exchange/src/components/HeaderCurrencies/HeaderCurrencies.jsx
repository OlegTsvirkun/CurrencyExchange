import React from 'react';
import styles from './HeaderCurrencies.module.scss';

export const HeaderCurrencies = ({}) => (
	<div className={styles.currencies}>
						<ul className={styles.currencies__item}>
							<li className={styles.currencies__dollar}>USD: 35.6 37.5</li>
							<li className={styles.currencies__euro}>EUR: 37.6 38.5</li>
						</ul>
					</div>
);

