import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calculator } from "../../components/Calculator/Calculator";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { CurrencyTable } from "../../components/CurrencyTable";
import { setGetCurrency, setGetCurrencyOpt, setGetValue, setGiveCurrency, setGiveCurrencyOpt, setGiveRate } from "../../store/calculationSlice";
import styles from "./HomePage.module.scss";

export const HomePage = ({}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
	const { GiveValue, GetValue, GiveRate, GetRate, GiveCurrency, GetCurrency } =
		useSelector((state) => state.calculation);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setGiveRate(Object.values(currencies)[1]?.rate));
		dispatch(setGetValue(GiveValue * GiveRate));
		dispatch(setGiveCurrency(Object.keys(currencies)[1]));
		dispatch(setGetCurrency(Object.keys(currencies)[0]));
		let curOpt= Object.keys(currencies).map(item=>item)
		// curOpt.push('UAH')
		dispatch(setGetCurrencyOpt(curOpt));
		dispatch(setGiveCurrencyOpt(curOpt.filter(item=> item !='UAH')));

		return () => {};
	}, [currencies]);

	return (
		<div className={styles.homePage}>
			<ContentWrapper>
				<CurrencyTable />
			</ContentWrapper>
			<div className="container">
				{Object.values(currencies)[0] && <Calculator />}
			</div>
		</div>
	);
};
