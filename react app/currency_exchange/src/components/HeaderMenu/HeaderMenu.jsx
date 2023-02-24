import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { menuList } from "../../const/menuList";
import { ModalBackground } from "../ModalBackground/ModalBackground";
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
				{menuList.map(({ path, title }) => (
					<li key={path} className={styles.menuList}>
						<Link to={path}>{title}</Link>
					</li>
				))}
			</ul>
			<div className={styles.helper}></div>
			{isOpen && <ModalBackground />}
		</div>
	);
};
