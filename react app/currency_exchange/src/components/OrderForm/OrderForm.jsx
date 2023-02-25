import React, { useState } from "react";
import styles from "./OrderForm.module.scss";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";

export const OrderForm = ({}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
	const [order, setOrder] = useState({});
	const username = useInput("");
	const tel = useInput("");
	const howmuch = useInput("");
	const currency = useInput("");
	const date = useInput("");
	const onSubmit = (e) => {
		e.preventDefault();
		setOrder({
			username: username.value,
			tel: tel.value,
			howmuch: howmuch.value,
			currency: currency.value,
			date: date.value,
		});
	};
	return (
		<form action="" className={styles.form}>
			<input
				{...username}
				required={true}
				pattern="^[a-zA-ZА-Яа-яєЄііЇїГг\s'-]+$"
				title="Тільки літери"
				className={styles.input}
				name="username"
				type="text"
				placeholder="Ваше ім'я"
			/>
			<input
				{...tel}
				required={true}
				title="Формат: +30961234567"
				pattern="^\+?([0-9]{12})$"
				className={styles.input}
				name="tel"
				type="tel"
				placeholder="Ваш телефон"
			/>
			<input
				{...howmuch}
				required={true}
				className={styles.input}
				name="howmuch"
				type="number"
				placeholder="Скільки хочете замовити?"
			/>
			<label htmlFor="cur">Виберіть валюту</label>
			<select {...currency} className={styles.input} id="cur" name="currency">
				{!isLoading &&
					Object.keys(currencies).map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
			</select>
			<label htmlFor="date">Коли хочете забрати:</label>
			<input
				{...date}
				required={true}
				className={styles.input}
				id="date"
				name="date"
				type="date"
			/>
			<button
				type="submit"
				className={styles.button}
				onClick={(e) => onSubmit(e)}
			>
				Замовити
			</button>
		</form>
	);
};
