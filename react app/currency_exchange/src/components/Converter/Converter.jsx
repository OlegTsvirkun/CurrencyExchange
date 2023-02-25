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
	const input = useRef();
	if (isLoading) return <>Loading..</>;
	return (
		<div className={styles.Converter + " " + styles.block + " " + className}>
			<div className={styles.title + " " + titleClassName}>{title}</div>
			<div className={styles.inputs}>
				<div className={styles.inputContainer}>
					<input
						ref={input}
						name={inptName}
						className={styles.value}
						onChange={(e) => setValue(e.target.value)}
						value={typeof value == "number" ? value.toFixed(2) : value}
						type="number"
					/>
					{input.current?.value && (
						<span className={styles.reset}>&#10005;</span>
					)}
				</div>
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
				</select>
			</div>
		</div>
	);
};
