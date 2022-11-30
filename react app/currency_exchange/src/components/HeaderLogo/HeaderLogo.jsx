import React from 'react';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = ({}) => (
	<div className={styles.logo}>
						<div className={styles.logo__title}>Обмінка UA</div>
						<div className={styles.logo__flag}>
							<div className={styles.logo__blue}></div>
							<div className={styles.logo__yellow}></div>
						</div>
					</div>
);

