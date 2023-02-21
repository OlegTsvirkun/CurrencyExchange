import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcGetCur, currenciesList } from "../../hooks";
import { Input } from "../Input";
import { Select } from "../Select/Select";
import styles from "./Calculator.module.scss";

export const Calculator = ({}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
	const form = useRef(null);
	const [giveValue, setGiveValue] = useState(100);
	const [getValue, setGetValue] = useState("");

	const [currencyGive, setCurrencyGive] = useState("");
	const [currencyGet, setCurrencyGet] = useState("");

	const [optionsValueGive, setOptionsValueGive] = useState();
	const [optionsValueGet, setOptionsValueGet] = useState();

	
	useEffect(() => {
		setCurrencyGive(currencies[0]?.currencyCodeA || "");
		setCurrencyGet(currencies[0]?.currencyCodeB || "");
		setGetValue(currencies[0]?.rateBuy || "");
		setOptionsValueGive(currenciesList(currencies));
		setOptionsValueGet(["UAH"]);
		// console.log('1',currenciesList(currencies));
	}, [currencies]);
const handleForm = useCallback(()=>{
	
},[setCurrencyGive])
	// const setValue=useCallback(()=>{
	// 	setCurrencyGet(optionsValueGive[0])
	// },[optionsValueGive]) 
	// console.log(currenciesList(currencies));
	// console.log("select give", currencyGive);
	// console.log("select get", currencyGet);
	if (isLoading) {
		return <> Loading ... </>;
	}
	return (
		<div className={styles.calculator}>
			<form ref={form} className={styles.calculator__block} >
				<div className={styles.giveBlock + " " + styles.block}>
					<div className={styles.title}>You give</div>
					<div className={styles.inputs}>
						<Input
							name=""
							id="number-give"
							//   setValue ={setGiveValue}
							inputClassName={styles.give__value}
							onChange={(e) => {
								setGiveValue(e.target.value);
								console.log('calculat',calcGetCur(currencies,giveValue,currencyGive, currencyGet));
								console.log(giveValue, currencyGive, currencyGet);
							}}
							value={giveValue}
						/>
						<Select
							name="currency-give"
							id
							selectClassName={styles.give__currency}
							onChange={(e) => {
								setCurrencyGive(e.target.value);
								setOptionsValueGet(
									optionsValueGive.filter((item) => item !== e.target.value),
								);
								// setValue()
								// setCurrencyGet(form.current.elements['currency-get'])
								// form.current.elements['currency-get'].options = optionsValueGet
				form.current.elements['currency-get'].value = optionsValueGet[0]

								
							}}
							value={currencyGive}
							optionsValue={optionsValueGive}
						/>
					</div>
				</div>
				<div className={styles.getBlock + " " + styles.block}>
					<div className={styles.title + " " + styles.getTitle}>You get</div>
					<div className={styles.inputs}>
						<Input
							name=""
							id="number-get"
							//   setValue ={setGiveValue}
							inputClassName={styles.get__value}
							onChange={(e) => setGetValue(e.target.value)}
							value={getValue}
						/>

						<Select
							name="currency-get"
							id
							selectClassName={styles.get__currency}
							onChange={(e) => setCurrencyGet(e.target.value)}
							value={currencyGet}
							optionsValue={optionsValueGet}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
