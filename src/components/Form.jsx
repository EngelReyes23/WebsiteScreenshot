import PropTypes from "prop-types";
import { useState } from "react";
import { getRandomColors, validateUrl } from "../helpers/functions";

export const Form = ({ setUrl, setColor, setIsValid }) => {
	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("#0000ff");
	const [colorList, setColorList] = useState(getRandomColors());

	return (
		<section
			className="form animate__animated animate__fadeIn"
			style={{ borderColor: selectedColor }}
		>
			<div className="form__group">
				<input
					type="text"
					className="form__field"
					placeholder="https://example.com"
					id="webAddress"
					value={webAddress}
					onChange={(e) => setWebAddress(e.target.value)}
				/>
				<label className="form__label" htmlFor="webAddress">
					Web Address
				</label>
			</div>
			<fieldset style={{ borderColor: selectedColor }}>
				<legend>Background Colors</legend>
				<div className="colors__container">
					{colorList.map((color, index) => (
						<div
							key={color}
							style={{ backgroundColor: colorList[index] }}
							className="color-box"
							onClick={() => setSelectedColor(colorList[index])}
						/>
					))}
				</div>
			</fieldset>
			<div>
				<button
					className="button--form"
					onClick={() => setColorList(getRandomColors())}
				>
					<span>Generate Random Colors</span>
				</button>
				<button
					className="button--form"
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
