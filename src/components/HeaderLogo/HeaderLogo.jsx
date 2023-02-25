import React from 'react';
import styles from './HeaderLogo.module.css';

export const HeaderLogo = ({}) => (
	<div className={styles.logo}>
						<div className={styles.title}>Обмінка UA</div>
						<div className={styles.flag}>
							<div className={styles.blue}></div>
							<div className={styles.yellow}></div>
						</div>
					</div>
);

