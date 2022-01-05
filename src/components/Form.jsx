import PropTypes from "prop-types";
import { useState } from "react";
import { getRandomColors, validateUrl } from "../helpers/functions";

export const Form = ({ setUrl, setColor, setIsValid }) => {
	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("#0000ff");
	const [colorList, setColorList] = useState(getRandomColors());

	return (
		<section style={{ borderColor: selectedColor }}>
			<div>
				<label htmlFor="webAddress">Web Address:</label>
				<input
					type="text"
					id="webAddress"
					value={webAddress}
					onChange={(e) => setWebAddress(e.target.value)}
				/>
			</div>
			<fieldset style={{ borderColor: selectedColor }}>
				<legend>Background Colors</legend>
				<div>
					{colorList.map((color, index) => (
						<div
							key={color}
							style={{ backgroundColor: colorList[index] }}
							onClick={() => setSelectedColor(colorList[index])}
						/>
					))}
				</div>
			</fieldset>
			<div>
				<button onClick={() => setColorList(getRandomColors())}>
					<span>Generate Random Colors</span>
				</button>
				<button
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
