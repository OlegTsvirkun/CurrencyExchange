import React from "react";
import styles from "./Footer.module.scss";
// import {FcCurrencyExchange} from 'react-icons/fc'
import logo from "../../ico.svg";
import contacts from "../../contacts.json";

export const Footer = ({}) => {
	console.log(Object.values(contacts.schedule)[0]);
	return (
		<div className={styles.footer}>
			<img className={styles.logo} src={logo} />
			<div className={styles.block}>
				<div>
				        <div className={styles.contacts}>Адреса: </div>
        				<div className={styles.contacts}>
        					{Object.values(contacts.address)[0]}
        				</div>
				</div>
				<div >
				        <div className={styles.contacts}>Телефони:</div>{" "}
        				<ul className={styles.contacts}>
        					{Object.values(contacts.tel)[0].map((item) => (
        						<li className={styles.items}>{item}</li>
        					))}
        				</ul>
				</div>
				<div>
				        <div className={styles.contacts}>Часи роботи:</div>
        				<ul className={styles.contacts}>
        					{Object.keys(contacts.schedule).map((item) => (
        						<li className={styles.items}>
        							{item}: {contacts.schedule[item]}
        						</li>
        					))}
        				</ul>
				</div>
			</div>
		</div>
	);
};
