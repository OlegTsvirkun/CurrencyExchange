import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setGiveCurrency,
	setGiveRate,
	setGiveValue,
} from "../../store/calculationSlice";
import styles from "./GiveMoney.module.scss";

export const GiveMoney = (
	{
	},
) => {
	const { GiveValue, GiveCurrency, GiveCurrencyOpt } = useSelector(
		(state) => state.calculation,
	);
	const { currencies, isLoading } = useSelector((state) => state.currency);

	const [input, setInput] = useState(GiveValue);
	const isUAH = useRef(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setGiveValue(input));
	}, [input]);

	const inputChange = (e) => {
		setInput(e.currentTarget.value);

		console.log(e.target);
		// dispatch(setGiveValue(e.currentTarget.value))
	};
	const selectChange = (e) => {
		dispatch(setGiveCurrency(e.currentTarget.value));
		dispatch(setGiveRate(currencies[e.currentTarget.value].rate));
	};

	if (isLoading) return <>Loading..</>;
	return (
		<div className={styles.giveMoney + " " + styles.block}>
			<div className={styles.title}>You give</div>
			<div className={styles.inputs}>
				<input
					name=""
					id="number-give"
					className={styles.value}
					onChange={(e) => inputChange(e)}
					value={input}
					type="number"
				/>
				<select
					name="currency-give"
					className={styles.currency}
					value={GiveCurrency}
					onChange={(e) => {
						selectChange(e);
						isUAH.current = true;
					}}
				>
					{GiveCurrencyOpt.map((key) => (
						<option value={key} key={key}>
							{key}
						</option>
					))}
					{/* <option value={1}>UAH</option> */}
				</select>
			</div>
		</div>
	);
};
