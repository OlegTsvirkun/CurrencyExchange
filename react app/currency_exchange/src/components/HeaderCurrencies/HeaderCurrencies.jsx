import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { cur } from "../../curr";
// import { isoCode } from "../../ISO_cur";

// import { getCurrencies } from "../../store/currencySlice";
import styles from "./HeaderCurrencies.module.css";
import { useState } from "react";
import { CurrencyItem } from "../CurrencyItem/CurrencyItem";
import CurrenciesName from '../../headerList.json'
import { getCurrency } from "../../store/currencySlice";
// const CurrenciesName = {
// 	USD: "Доллар",
// 	EUR: "Євро",
// 	GBP: "Британський фунт",
// };
export const HeaderCurrencies = ({}) => {
	const [usd, setUsd] = useState([]);
	const [eur, setEur] = useState([]);
	const dispatch = useDispatch();
	const {currencies} = useSelector(state=>state.currency)
	useEffect(()=>{
	  dispatch(getCurrency())
	},[])
	// const { currencies, isLoading } = useSelector((state) => state.currency);
	// const [y, m, d] = new Date().toISOString().split("T")[0].split("-");
	// const date = `${y}${m}${d}`;
	// console.log(date);
	// Object.keys(currencies).map((key) => console.log(key.rate))
	return (
		<div className={styles.currencies}>
			<ul className={styles.list}>
				{Object.keys(currencies).map((key) =>{ 
					if(key != "UAH")return (
					<li key = {key} className={styles.itemLi}>
						<CurrencyItem  className= {styles.item} currency={key} rate = {currencies[key].rate} title = {currencies[key].cc}/>
					</li>
					)
				})}
			</ul>
		</div>
	);
};
