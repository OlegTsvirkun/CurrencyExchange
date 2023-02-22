import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";


import { GetMoney } from "../GetMoney/GetMoney";
import { GiveMoney } from "../GiveMoney/GiveMoney";
import styles from "./Calculator.module.scss";

export const Calculator = () => {
	const { currencies, isLoading } = useSelector((state) => state.currency);

	const [giveValue, setGiveValue] = useState(100.0);
	const [getValue, setGetValue] = useState(0.0);

	const [giveRate, setGiveRate] = useState(Object.values(currencies)[1]?.rate);
	const [getRate, setGetRate] = useState(Object.values(currencies)[0]?.rate);

	const [giveOption, setGiveOption] = useState(Object.keys(currencies)[1]);
	const [getOption, setGetOption] = useState(Object.keys(currencies)[0]);

	const [giveCurList, setGiveCurList] = useState(
		Object.keys(currencies).filter((item) => item != "UAH"),
	);
	const [getCurList, setGetCurList] = useState(
		Object.keys(currencies).map((item) => item),
	);

	const giveIsActive = useRef(true);
	const getIsActive = useRef(false);

	useEffect(() => {
		setGetValue((giveValue * giveRate).toFixed(2));
	}, []);

	const handleForm = (e) => {
		switch (e.target.name) {
			case "inptGive":
				console.log("inptGive", giveIsActive, getIsActive);
				setGetValue(
					e.target.value *
						(getRate / giveRate > 1 ? getRate / giveRate : giveRate / getRate),
				);

				giveIsActive.current = true;
				getIsActive.current = false;
				
				break;

			case "slctGive":
				setGiveRate(currencies[e.target.value].rate);
				if (giveIsActive.current) {
					setGetValue(
						giveValue *
							(giveRate / getRate > 1
								? currencies[e.target.value].rate / getRate
								: getRate / currencies[e.target.value].rate),
					);
				} else {
					setGiveValue(
						getValue *
							(giveRate / getRate > 1
								? currencies[e.target.value].rate / getRate
								: getRate / currencies[e.target.value].rate),
					);
				}

				giveIsActive.current = true;
				getIsActive.current = false;
				
				break;

			case "inptGet":
				console.log("inptGet", giveIsActive, getIsActive);
				setGiveValue(
					e.target.value *
						(getRate / giveRate > 1 ? giveRate / getRate : getRate / giveRate),
				);

				giveIsActive.current = false;
				getIsActive.current = true;

				break;

			case "slctGet":
				console.log("slctGet", e.target.value);
				setGetRate(currencies[e.target.value].rate);
				if (getIsActive.current) {
					setGiveValue(
						getValue *
							(getRate / giveRate > 1
								? giveRate / currencies[e.target.value].rate
								: currencies[e.target.value].rate / giveRate),
					);
				} else {
					setGetValue(
						giveValue *
							(getRate / giveRate > 1
								? giveRate / currencies[e.target.value].rate
								: currencies[e.target.value].rate / giveRate),
					);
				}
				giveIsActive.current = false;
				getIsActive.current = true;

				break;
		}
	};
	return (
		<div className={styles.calculator}>
			<form  className={styles.block} onChange={(e) => handleForm(e)}>
				{
					<>
						<GiveMoney
							title={giveIsActive.current ? "You give" : "You get"}
							value={giveValue}
							setValue={setGiveValue}
							rate={giveRate}
							setRate={(e) => setGiveRate(e)}
							option={giveOption}
							setOption={setGiveOption}
							curList={giveCurList}
							setCurList={setGiveCurList}
						/>
						<GetMoney
							title={getIsActive.current ? "You give" : "You get"}
							value={getValue}
							setValue={setGetValue}
							rate={getRate}
							setRate={(e) => setGetRate(e)}
							option={getOption}
							setOption={(e) => setGetOption(e)}
							curList={getCurList}
							setCurList={setGetCurList}
						/>
					</>
				}
			</form>
		</div>
	);
};
