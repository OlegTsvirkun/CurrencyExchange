import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setGetCurrency,
	setGetRate,
	setGetValue,
	setGiveCurrency,
} from "../../store/calculationSlice";
import styles from "./GetMoney.module.scss";

export const GetMoney = (
	{
	
	},
) => {
	const { GiveValue, GetValue, GetCurrency, GetCurrencyOpt } = useSelector(
		(state) => state.calculation,
	);
	const { currencies, isLoading } = useSelector((state) => state.currency);
	const dispatch = useDispatch();
	const [input, setInput] = useState(GiveValue);

	// const [getSelect, setSelect] = useState(GetRate);

	useEffect(() => {
		dispatch(setGetValue(input));
	}, [input]);

	const inputChange = (e) => {
		setInput(e.currentTarget.value);
	};
	const selectChange = (e) => {
		dispatch(setGetCurrency(e.currentTarget.value));
		dispatch(setGetRate(currencies[e.currentTarget.value].rate));
	};
	if (isLoading) return <>Loading..</>;

	return (
		<div className={styles.getMoney + " " + styles.block}>
			<div className={styles.title + " " + styles.getTitle}>You get</div>
			<div className={styles.inputs}>
				<input
					name=""
					id="number-get"
					type="number"
					// ref={inputGetRef}
					className={styles.value}
					onChange={(e) => inputChange(e)}
					value={input}
				/>

				<select
					name="currency-get"
					className={styles.currency}
					onChange={(e) => selectChange(e)}
					value={GetCurrency}
				>
					{GetCurrencyOpt.map((key) => (
						<option value={key} key={key}>
							{key}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
