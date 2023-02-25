import {  useSelector } from "react-redux";
import { Calculator } from "../../components/Calculator/Calculator";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { CurrencyTable } from "../../components/CurrencyTable";
import styles from "./HomePage.module.scss";

export const HomePage = ({}) => {
	const {  isLoading } = useSelector((state) => state.currency);
	

	return (
		<div className={styles.homePage}>
			<ContentWrapper >
				<CurrencyTable />
				{!isLoading && <Calculator />}
			</ContentWrapper>
			<div className={styles.container}>
			</div>
		</div>
	);
};
