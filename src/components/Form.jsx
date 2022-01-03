import PropTypes from "prop-types";
import { useState } from "react";
import { validateUrl } from "../helpers/functions";
import style from "./css/Form.module.css";

export const Form = ({ setUrl, setColor, setIsValid }) => {
	// array de colores aleatorios
	const colors = [
		"#FFF8F3",
		"#A3E4DB",
		"#1C6DD0",
		"#FED1EF",
		"#6A097D",
		"#DA0037",
		"#444444",
		"#171717",
	];

	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("#0000ff");
	const [colorList, setColorList] = useState(colors);

	const generateRandomColor = () => {
		setColorList([]);
		for (let i = 1; i <= 8; i++) {
			let hex = Math.floor(Math.random() * 16777215).toString(16);
			while (hex.length < 6) {
				hex = "0" + hex;
			}
			setColorList((colorList) => [...colorList, "#" + hex]);
		}
	};

	return (
		<section className={style.container} style={{ borderColor: selectedColor }}>
			<div className={style.input_container}>
				<label className={style.label} htmlFor="webAddress">
					Web Address:
				</label>
				<input
					className={style.input}
					type="text"
					id="webAddress"
					value={webAddress}
					onChange={(e) => setWebAddress(e.target.value)}
				/>
			</div>
			<fieldset style={{ borderColor: selectedColor }}>
				<legend>Background Colors</legend>
				<div className={style.gridColors}>
					{colorList.map((color, index) => (
						<div
							key={color}
							className={style.color}
							style={{ backgroundColor: colorList[index] }}
							onClick={() => setSelectedColor(colorList[index])}
						/>
					))}
				</div>
			</fieldset>
			<div className={style.buttons}>
				<button
					className={(style.button, style.button_random)}
					onClick={() => generateRandomColor()}
				>
					<span>Generate Random Colors</span>
				</button>
				<button
					className={style.button}
					type="button"
					disabled={!validateUrl(webAddress)}
					onClick={() => {
						setUrl(webAddress);
						setColor(selectedColor);
						setIsValid(true);
					}}
				>
					Generate Screenshot
				</button>
			</div>
		</section>
	);
};

// PROPERTY REFUND
Form.propTypes = {
	setUrl: PropTypes.func.isRequired,
	setColor: PropTypes.func.isRequired,
	setIsValid: PropTypes.func.isRequired,
};
