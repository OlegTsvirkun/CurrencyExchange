import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cur } from "../../curr";
import { isoCode } from "../../ISO_cur";
import { LineWave } from "react-loader-spinner";

import { getCurrencies } from "../../store/currencySlice";
import styles from "./HeaderCurrencies.module.scss";
import { useState } from "react";

export const HeaderCurrencies = ({}) => {
	const [usd, setUsd] = useState([]);
	const [eur, setEur] = useState([]);
	const dispatch = useDispatch();

	const { currencies, isLoading } = useSelector((state) => state.currency);

	useEffect(() => {
		dispatch(getCurrencies());
	}, [dispatch]);
	if (isLoading) {
		return (
			<div className={styles.currencies}>
				<ul className={styles.currencies__item}>
					<li className={styles.currencies__dollar}>USD: Загрузка...</li>
					<li className={styles.currencies__euro}>EUR :Загрузка...</li>
				</ul>
			</div>
		);
	}
	if (!isLoading) {
		const { USD, EUR } = currencies.reduce((acc, item) => {
			if (item.currencyCodeB == "UAH") acc[item.currencyCodeA] = item;
			return acc;
		}, {});

		return (
			<div className={styles.currencies}>
				<ul className={styles.currencies__item}>
					<li className={styles.currencies__dollar}>
						USD: {`buy: ${USD.rateBuy} / sell: ${USD.rateSell}`}
					</li>
					<li className={styles.currencies__euro}>
						EUR: {`buy: ${EUR.rateBuy} / sell: ${EUR.rateSell}`}
					</li>
				</ul>
			</div>
		);
	}
};
