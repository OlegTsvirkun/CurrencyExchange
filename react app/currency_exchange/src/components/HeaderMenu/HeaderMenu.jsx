import React, { useRef, useState } from "react";
import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	const isClick = useRef(false);

	return (
		<div id="menu" className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
			<div
				className={`${styles.menuItem} ${!isOpen && styles.hide} ${
					isOpen && styles.menuClick
				}`}
			>
				<div className={styles.title}>MENU</div>
				<span></span>
			</div>
			<ul
				className={`${styles.list} ${styles.notactive} ${
					isOpen && styles.menuOpen
				}`}
			>
				<li className={styles.menuList__item}>Замовити валюту</li>
				<li className={styles.menuList__item}>Мапа проїзду</li>
				<li className={styles.menuList__item}>Контакти</li>
			</ul>
			<div className={styles.helper}></div>
		</div>
		
	);
};
