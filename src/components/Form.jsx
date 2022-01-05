import PropTypes from "prop-types";
import { useState } from "react";
import { getRandomColors, validateUrl } from "../helpers/functions";
import style from "./css/Form.module.css";

export const Form = ({ setUrl, setColor, setIsValid }) => {
	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("#0000ff");
	const [colorList, setColorList] = useState(getRandomColors());

	console.table(colorList);

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
					onClick={() => setColorList(getRandomColors())}
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
