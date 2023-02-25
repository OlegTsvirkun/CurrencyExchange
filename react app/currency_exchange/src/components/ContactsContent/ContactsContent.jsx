import React from "react";
import styles from "./ContactsContent.module.scss";
import contacts from "../../const/contacts.json";
export const ContactsContent = ({}) => {
	console.log(Object.keys(contacts.schedule));
	return (
		<div className={styles.contactsContent}>
			<h2>{Object.keys(contacts.address)[0]}:</h2>
			<h4>{Object.values(contacts.address)[0]}</h4>
			<h2>{Object.keys(contacts.tel)[0]}:</h2>
			<ul>
				{Object.values(contacts.tel)[0].map((item) => (
					<li><h4>{item}</h4></li>
				))}
			</ul>
			<ul>
				<h2>Розклад:</h2>
				<ul>
					{Object.keys(contacts.schedule).map((item) => (
						<li><h4>{contacts.schedule[item]}</h4></li>
					))}
				</ul>
				{}
			</ul>
		</div>
	);
};
