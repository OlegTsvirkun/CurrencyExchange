import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { Location } from "../../components/Location/Location";
import { ContactsContent } from "../../components/ContactsContent/ContactsContent";
import styles from "./Contacts.module.scss";

export const Contacts = ({}) => {
	return (
		<ContentWrapper className={styles.contacts}>
			<ContactsContent />
			<Location />
		</ContentWrapper>
	);
};
