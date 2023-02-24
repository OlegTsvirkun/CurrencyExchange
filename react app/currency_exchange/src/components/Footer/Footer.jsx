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
        				<div className={styles.items}>
				        <div>Адреса: </div>
        					{Object.values(contacts.address)[0]}
        				</div>
				</div>
				<div >
        				<ul className={styles.contacts}>
				        <div >Телефони:</div>{" "}
        					{Object.values(contacts.tel)[0].map((item) => (
        						<li key={item} className={styles.items}>{item}</li>
        					))}
        				</ul>
				</div>
				<div>
        				<ul className={styles.contacts}>
				        <div >Часи роботи:</div>
        					{Object.keys(contacts.schedule).map((item) => (
        						<li key={item} className={styles.items}>
        							{item}: {contacts.schedule[item]}
        						</li>
        					))}
        				</ul>
				</div>
			</div>
		</div>
	);
};
