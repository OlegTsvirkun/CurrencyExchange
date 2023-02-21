import React from "react";
import { useSelector } from "react-redux";
import { Calculator } from "../../components/Calculator/Calculator";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { CurrencyTable } from "../../components/CurrencyTable";
import styles from "./HomePage.module.scss";

export const HomePage = ({}) => {
  const {
		
		optionsGiveValue,
		optionsGetValue,
	} = useSelector((state) => state.formData);
  return(
	<div className={styles.homePage}>
		<ContentWrapper>
			<CurrencyTable />
		</ContentWrapper>
		<div className="container">
			<Calculator optionsGiveValue ={optionsGiveValue} optionsGetValue= {optionsGetValue} />
		</div>
	</div>
)};
