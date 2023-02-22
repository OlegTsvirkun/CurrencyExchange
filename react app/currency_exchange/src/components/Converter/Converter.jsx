import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Converter.module.scss";

export const Converter = ({
	className,
	titleClassName,
	title,
	value,
	setValue,
	rate,
	setRate,
	option,
	setOption,
	curList,
	inptName,
	slctName,
	setCurList,
}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);

	const isUAH = useRef(false);

	if (isLoading) return <>Loading..</>;
	return (
		<div className={styles.Converter + " " + styles.block + " " + className}>
			<div className={styles.title + " " + titleClassName}>{title}</div>
			<div className={styles.inputs}>
				<input
					name={inptName}
					// id="number-give"
					className={styles.value}
					onChange={(e) => setValue(e.target.value)}
					value={typeof value == "number" ? value.toFixed(2) : value}
					type="number"
				/>
				<select
					name={slctName}
					className={styles.currency}
					value={option}
					onChange={(e) => {
						setOption(e.target.value);
						isUAH.current = true;
					}}
				>
					{curList.map((key) => (
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
