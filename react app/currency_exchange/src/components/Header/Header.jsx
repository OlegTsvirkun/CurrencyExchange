import React from "react";
import { HeaderCurrencies } from "../HeaderCurrencies/HeaderCurrencies";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import styles from "./Header.module.scss";

export const Header = ({}) => (
	<div className={styles.header}>
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__item}>
					<HeaderLogo />
					<HeaderCurrencies />
					<HeaderMenu/>
				</div>
			</div>
		</header>
	</div>
);
