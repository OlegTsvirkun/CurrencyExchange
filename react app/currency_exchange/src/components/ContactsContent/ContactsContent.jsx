import React from "react";
import contacts from "../../const/contacts.json";
import styles from "./ContactsContent.module.scss";
export const ContactsContent = ({}) => {
  return (
		<div className={styles.contactsContent}>
			<div>
			  <h2>{Object.keys(contacts.address)[0]}:</h2>
  			<h4>{Object.values(contacts.address)[0]}</h4>
			</div>
			<div>
			  <h2>{Object.keys(contacts.tel)[0]}:</h2>
  			<ul>
  				{Object.values(contacts.tel)[0].map((item) => (
  					<li key={item} ><h4>{item}</h4></li>
  				))}
  			</ul>
  			
			</div>
				<div>
				  <h2>Розклад:</h2>
  				<ul>
  					{Object.keys(contacts.schedule).map((item) => (
  						<li key={item}><h4>{contacts.schedule[item]}</h4></li>
  					))}
  				</ul>
  			
				</div>
			
		</div>
	);
};
