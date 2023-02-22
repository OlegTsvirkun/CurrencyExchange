import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcGetCur, currenciesList } from "../../hooks";
import {
	setGetCurrency,
	setGetValue,
	setGiveCurrency,
	setGiveValue,
	setOptionsGetValue,
	setOptionsGiveValue,
} from "../../store/calculationSlice";
import { GetMoney } from "../GetMoney/GetMoney";
import { GiveMoney } from "../GiveMoney/GiveMoney";
import styles from "./Calculator.module.scss";

export const Calculator = () => {
	// console.log(Object.values(currencies)[0].rate)

	const form = useRef(null);
	const {
		GiveValue,
		GetValue,
		GiveRate,
		GetRate,
		GiveCurrency,
		GetCurrency,
		GiveCurrencyOpt,
		GetCurrencyOpt,
	} = useSelector((state) => state.calculation);

	useEffect(() => {}, []);
	const calculate = () => {};

	const giveVChange = () => {};

	return (
		<div className={styles.calculator}>
			<form ref={form} className={styles.block}>
				<GiveMoney />
				<GetMoney />
			</form>
		</div>
	);
};
