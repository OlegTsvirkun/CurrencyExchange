import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../const/constPaths";
import { HeaderCurrencies } from "../HeaderCurrencies/HeaderCurrencies";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import styles from "./Header.module.css";

export const Header = ({}) => (
	<div className={styles.header}>
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.item}>
					<Link to={HOME_ROUTE}><HeaderLogo /></Link >
					<HeaderCurrencies />
					<HeaderMenu/>
				</div>
			</div>
		</header>
	</div>
);
