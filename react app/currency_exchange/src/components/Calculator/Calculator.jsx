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
} from "../../store/formDataSlice";
import { Input } from "../Input";
import { Select } from "../Select/Select";
import styles from "./Calculator.module.scss";

export const Calculator = ({}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);

	const form = useRef(null);

	const [giveValue, setGiveValue] = useState(100);
	const [getValue, setGetValue] = useState("");

	const [giveCurrency, setGiveCurrency] = useState("");
	const [getCurrency, setGetCurrency] = useState("");

	const [optionsGiveValue, setOptionsValueGive] = useState();
	const [optionsGetValue, setOptionsGetValue] = useState();

	const [calculations, setCalculations] = useState(null);

	const currencyGetRef = useRef("");
	const currencyGiveRef = useRef("");
	const inputGiveRef = useRef("");
	const inputGetRef = useRef("");
	const firstCurName = currencyGiveRef.current;
	const secondCurName = currencyGetRef.current;
	useEffect(() => {
		setGiveCurrency(currencies[0]?.currencyCodeA || "");
		setGetCurrency(currencies[0]?.currencyCodeB || "");
		setGetValue(giveValue * currencies[0]?.rateBuy || "");
		setOptionsValueGive(currenciesList(currencies));
		setOptionsGetValue(["UAH"]);
	}, [currencies]);

	const handleForm = useCallback(() => {
		console.log(
			"calculat",
			calcGetCur(
				currencies,
				inputGiveRef.current.value,
				giveCurrency,
				getCurrency,
			),
		);
		console.log(inputGiveRef.current.value, giveCurrency, getCurrency);
	}, [giveValue, getValue, giveCurrency, getCurrency]);

	// const setValue=useCallback(()=>{
	// 	setGetCurrency(optionsValueGive[0])
	// },[optionsValueGive])
	// console.log(currenciesList(currencies));
	// console.log("select give", giveCurrency);
	// console.log("select get", getCurrency);
	if (isLoading) {
		return <> Loading ... </>;
	}
	return (
		<div className={styles.calculator}>
			<form
				ref={form}
				className={styles.calculator__block}
				onChange={handleForm}
			>
				<div className={styles.giveBlock + " " + styles.block}>
					<div className={styles.title}>You give</div>
					<div className={styles.inputs}>
						<Input
							name=""
							id="number-give"
							//   setValue ={setGiveValue}
							inputClassName={styles.give__value}
							ref={inputGiveRef}
							onChange={() => {
								setGiveValue(inputGiveRef.current.value);
								setGetValue(
									calcGetCur(
										currencies,
										inputGiveRef.current.value,
										giveCurrency,
										getCurrency,
									),
								);
							}}
							value={giveValue}
						/>
						<select
							name="currency-give"
							ref={currencyGiveRef}
							className={styles.give__currency}
							value={giveCurrency}
							onChange={(e) => {
								setGiveCurrency(currencyGiveRef.current.value);
								let arr = optionsGiveValue.filter(
									(item) => item != e.target.value,
								);
								setOptionsGetValue(arr);
								setGetCurrency(arr[0]);
								setGetValue(
									calcGetCur(
										currencies,
										inputGiveRef.current.value,
										currencyGiveRef.current.value,
										currencyGetRef.current.value,
									),
								);
							}}
						>
							{optionsGiveValue &&
								optionsGiveValue.map((currency) => (
									<option key={currency}>{currency}</option>
								))}
						</select>
					</div>
				</div>
				<div className={styles.getBlock + " " + styles.block}>
					<div className={styles.title + " " + styles.getTitle}>You get</div>
					<div className={styles.inputs}>
						<Input
							name=""
							id="number-get"
							ref={inputGetRef}
							setValue={setGiveValue}
							inputClassName={styles.get__value}
							onChange={(e) => dispatch(setGetValue(+e.target.value))}
							value={getValue}
						/>

						<select
							name="currency-get"
							ref={currencyGetRef}
							className={styles.get__currency}
							onChange={(e) => setGetCurrency(currencyGetRef.current.value)}
							value={getCurrency}
						>
							{optionsGetValue &&
								optionsGetValue.map((currency) => (
									<option key={currency}>{currency}</option>
								))}
						</select>
					</div>
				</div>
			</form>
		</div>
	);
};
