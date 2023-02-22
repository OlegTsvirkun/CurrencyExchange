import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./GetMoney.module.scss";

export const GetMoney = ({title, value, setValue, rate, setRate ,curList, setCurList,option,setOption}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
	
	if (isLoading) return <>Loading..</>;

	return (
		<div className={styles.getMoney + " " + styles.block}>
			<div className={styles.title + " " + styles.getTitle}>{title}</div>
			<div className={styles.inputs}>
				<input
					name="inptGet"
					id="number-get"
					type="number"
					className={styles.value}
					onChange={(e) => setValue(e.target.value)}
					value={typeof value == 'number'? value.toFixed(2):value}
				/>

				<select
					name="slctGet"
					className={styles.currency}
					onChange={(e) => setOption(e.target.value)}
					value={option}
				>
					{curList.map((key) => (
						<option value={key} key={key}>
							{key}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
