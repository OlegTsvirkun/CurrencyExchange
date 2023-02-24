import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { useNavigate  } from "react-router-dom";
import useInput from "../../hooks/useInput";
import styles from "./Order.module.scss";
import { HOME_ROUTE } from "../../const/constPaths";

export const Order = ({}) => {
	const { currencies, isLoading } = useSelector((state) => state.currency);
const navigate = useNavigate()
	const [getCurList, setGetCurList] = useState(
		Object.keys(currencies).map((item) => item),
	);
  const [isModal, setIsModal] = useState(false)
	const username = useInput("");
	const tel = useInput("");
	const howmuch = useInput("");
	const currency = useInput("");
	const date = useInput("");
  const onSubmit = (e)=>{
    e.preventDefault()
  }
  const modalBtnClick =()=>{
   navigate(HOME_ROUTE)
  }
	return (
		<ContentWrapper className={styles.order}>
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
          pattern='^\+?([0-9]{12})$'
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
					{getCurList.map((item) => (
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
				<button type="submit" className={styles.button} onClick={(e)=>onSubmit(e)}>
					Замовити
				</button>
			</form>
     {isModal && <ModalWindow frstBtnClick={modalBtnClick} closeClick={()=>setIsModal(false)}/>}
		</ContentWrapper>
	);
};
