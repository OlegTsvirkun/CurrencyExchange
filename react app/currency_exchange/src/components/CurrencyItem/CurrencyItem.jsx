import styles from "./CurrencyItem.module.scss";

export const CurrencyItem = ({  rate, title, className }) => {
	return (
		<div className={`${styles.currencyItem} ${className}`}>
			<div>{title}:</div>
			<div>{rate} uah</div>
		</div>
	);
};
