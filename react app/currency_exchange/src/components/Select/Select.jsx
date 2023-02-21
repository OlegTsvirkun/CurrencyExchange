import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Select.module.scss";

export const Select = ({
  name,
  id,
  selectClassName,
  onChange = ()=>null,
  value,
  optionsValue
}) => {
	
	return (
		// <div className={styles.select}>
		<select
			className={`${styles.select} ${selectClassName}`}
			name={name}
			id=""
      onChange={onChange}
      value = {value}
		>
      {optionsValue && optionsValue.map(currency=><option key = {currency} >{currency}</option>)}
		
		</select>
	);
};
