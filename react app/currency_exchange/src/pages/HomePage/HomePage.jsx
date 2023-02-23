import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calculator } from "../../components/Calculator/Calculator";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { CurrencyTable } from "../../components/CurrencyTable";
import styles from "./HomePage.module.scss";

export const HomePage = ({}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
	

	return (
		<div className={styles.homePage}>
			<ContentWrapper className={styles.wrapper}>
				<CurrencyTable />
			</ContentWrapper>
			<div className={styles.container}>
				{!isLoading && <Calculator />}
			</div>
		</div>
	);
};
