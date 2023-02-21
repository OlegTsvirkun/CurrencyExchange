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

export const Calculator = ({optionsGiveValue , optionsGetValue}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
	const {
		giveValue,
		getValue,
		giveCurrency,
		getCurrency,
	
	} = useSelector((state) => state.formData);
	const form = useRef(null);
	const dispatch = useDispatch();
const  currencyGetRef = useRef('')
const  currencyGiveRef = useRef('')
	useEffect(() => {
		dispatch(setGiveCurrency(currencies[0]?.currencyCodeA || ""));
		dispatch(setGetCurrency(currencies[0]?.currencyCodeB || ""));
		dispatch(setGetValue(currencies[0]?.rateBuy || ""));
		dispatch(setOptionsGiveValue(currenciesList(currencies)));
		// dispatch(setOptionsGetValue());
		// console.log('1',currenciesList(currencies));
	}, [currencies]);
	
	
	
	
	// const setValue=useCallback(()=>{
	// 	setCurrencyGet(optionsValueGive[0])
	// },[optionsValueGive])
	// console.log(currenciesList(currencies));
	// console.log("select give", giveCurrency);
	// console.log("select get", getCurrency);
	if (isLoading) {
		return <> Loading ... </>;
	}
	return (
		<div className={styles.calculator}>
			<form ref={form} className={styles.calculator__block}>
				<div className={styles.giveBlock + " " + styles.block}>
					<div className={styles.title}>You give</div>
					<div className={styles.inputs}>
						<Input
							name=""
							id="number-give"
							//   setValue ={setGiveValue}
							inputClassName={styles.give__value}
							onChange={(e) => {
								dispatch(setGiveValue(+e.target.value));
								console.log(
									"calculat",
									calcGetCur(currencies, giveValue, giveCurrency, getCurrency),
								);
								console.log(giveValue, giveCurrency, getCurrency);
								
							}}
							value={giveValue}
						/>
							<select
							name="currency-give"
							ref={currencyGiveRef}
							
							className={styles.give__currency}
							onChange={(e) => {
								dispatch(setGiveCurrency(e.target.value));
								dispatch(
									setOptionsGetValue(
										optionsGiveValue.filter((item) => item !== e.target.value),
									),
								);
								currencyGetRef.current.value =
								optionsGetValue[0];
							 dispatch(setGetCurrency(currencyGetRef.current.value))
							}}
								value={giveCurrency}
							
							
						>
							{optionsGiveValue && optionsGiveValue.map(currency=><option key = {currency} >{currency}</option>)}
							</select>
						
					</div>
				</div>
				<div className={styles.getBlock + " " + styles.block}>
					<div className={styles.title + " " + styles.getTitle}>You get</div>
					<div className={styles.inputs}>
						<Input
							name=""
							id="number-get"
							  setValue ={setGiveValue}
							inputClassName={styles.get__value}
							onChange={(e) => dispatch(setGetValue(+e.target.value))}
							value={getValue}
						/>

						<select
							name="currency-get"
							ref={currencyGetRef}
							className={styles.get__currency}
							onChange={(e) => dispatch(setGetCurrency(e.target.value))}
							value={getCurrency}
							
						>
							{optionsGetValue && optionsGetValue.map(currency=><option key = {currency} >{currency}</option>)}
							</select>
					</div>
				</div>
			</form>
		</div>
	);
};
