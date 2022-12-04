import React from "react";
import styles from "./Calculator.module.scss";

export const Calculator = ({}) => {

	return (
		
			<div className ={styles.calculator}>
				<div className={styles.calculator__block}>
					<div className ={styles.giveBlock}>
						<div className ={styles.giveTitle}>You give</div>
						<div className ={styles.give__inputs}>
              
							<input
								className ={styles.give__value}
								type="number"
								name="give-number"
								id="give-number"
								value="100"
							/>
							<select
								className ={styles.give__currency}
								name="give-currency"
								id="give-currency"
							>
								<option value="UAH">UAH</option>
								<option value="USD">USD</option>
								<option value="EUR">EUR</option>
								<option value="GBP">GBP</option>
							</select>
						</div>
					</div>
					<div className ={styles.getBlock}>
						<div className ={styles.getTitle}>You get</div>

						<div className ={styles.get__inputs}>
							<input
								className ={styles.get__value}
								type="number"
								name="get-value"
								id="get-number"
								value="3700"
							/>
							<select
								className ={styles.get__currency}
								name="get-currency"
								id="get-currency"
							>
								<option value="UAH">UAH</option>
								<option value="USD">USD</option>
								<option value="EUR">EUR</option>
								<option value="GBP">GBP</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		
	);
};
