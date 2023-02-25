import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { cur } from "../../curr";
// import { isoCode } from "../../ISO_cur";

// import { getCurrencies } from "../../store/currencySlice";
import styles from "./HeaderCurrencies.module.css";
import { useState } from "react";
import { CurrencyItem } from "../CurrencyItem/CurrencyItem";
// import CurrenciesName from '../../headerList.json'
import { getCurrency } from "../../store/currencySlice";

export const HeaderCurrencies = ({}) => {

	const dispatch = useDispatch();
	const {currencies} = useSelector(state=>state.currency)
	useEffect(()=>{
	  dispatch(getCurrency())
	},[])
	
	return (
		<div className={styles.currencies}>
			<ul className={styles.list}>
				{Object.keys(currencies).map((key) =>{ 
					if(key != "UAH")return (
					<li key = {key} className={styles.itemLi}>
						<CurrencyItem  className= {styles.item} currency={key} rate = {typeof currencies[key].rate =='number' && currencies[key].rate.toFixed(2)} title = {currencies[key].cc}/>
					</li>
					)
				})}
			</ul>
		</div>
	);
};
