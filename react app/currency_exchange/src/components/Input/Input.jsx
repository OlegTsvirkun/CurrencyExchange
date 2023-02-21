import React, { useState } from "react";
import styles from "./Input.module.scss";

export const Input = React.forwardRef(
	(
		{
			name = "",
			inputClassName = "",
			placeholder = "",
			id = "",
			value,
			onChange = () => null,
			// setValue ,
		},
		ref,
	) => {
		return (
			<input
				ref={ref}
				type="number"
				pattern="[0-9]*"
				name={name}
				id={id}
				className={`${styles.input__value} ${inputClassName}`}
				placeholder={placeholder}
				value={value}
				// onChange={(e)=>setValue(e.target.value)}
				onChange={onChange}
			/>
		);
	},
);
