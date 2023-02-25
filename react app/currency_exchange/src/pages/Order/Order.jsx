import React, { useState } from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { useNavigate } from "react-router-dom";
import styles from "./Order.module.scss";
import { HOME_ROUTE } from "../../const/constPaths";
import { OrderForm } from "../../components/OrderForm/OrderForm";

export const Order = ({}) => {
	const navigate = useNavigate();
	const [isModal, setIsModal] = useState(false);

	const modalBtnClick = () => {
		navigate(HOME_ROUTE);
	};
	return (
		<ContentWrapper className={styles.order}>
			<h1 className={styles.title}>
				Тут ви можете замовити валюту, на певний час.
			</h1>{" "}
			<h3 className={styles.title}>
				Заповніть форму та наш оператор зв'яжеться з Вами у найближчий час
			</h3>
			<OrderForm />
			{isModal && (
				<ModalWindow
					frstBtnClick={modalBtnClick}
					closeClick={() => setIsModal(false)}
				/>
			)}
		</ContentWrapper>
	);
};
