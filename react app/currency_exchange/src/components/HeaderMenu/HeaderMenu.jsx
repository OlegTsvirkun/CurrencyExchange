import React from 'react';
import styles from './HeaderMenu.module.scss';

export const HeaderMenu = ({}) => (
<div id="menu" className={styles.menu}>
						<div className={styles.menu__helper}></div>
						<div className={`${styles.menu__item} ${styles.hide}`}>
							<div className={styles.menu__title}>MENU</div>
							<span></span>
						</div>
						<ul className={`${styles.menu__list} ${styles.notactive}`}>
							<li className={styles.menuList__item}>Замовити валюту</li>
							<li className={styles.menuList__item}>Мапа проїзду</li>
							<li className={styles.menuList__item}>Контакти</li>
							<li className={styles.menuList__item}>4</li>
						</ul>
					</div>
);

