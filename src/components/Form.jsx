import PropTypes from "prop-types";
import { useState } from "react";
import { validateUrl } from "../helpers/functions";

export const Form = ({ setUrl, setColor, setIsValid }) => {
	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("#0000ff");

	return (
		<fieldset style={{ borderColor: selectedColor }}>
			<legend>Some title</legend>
			<form>
				<div>
					<label htmlFor="webAddress">Web Address: </label>
					<input
						type="text"
						id="webAddress"
						value={webAddress}
						onChange={({ target }) => {
							setWebAddress(target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="color">Background Color: </label>
					<input
						type="color"
						id="color"
						value={selectedColor}
						onChange={({ target }) => setSelectedColor(target.value)}
					/>
				</div>
				<button
					disabled={!validateUrl(webAddress)}
					onClick={(e) => {
						e.preventDefault();
						setWebAddress("");
						setIsValid(true);
						setUrl(webAddress);
						setColor(selectedColor);
					}}
				>
					Generate Screenshot
				</button>
			</form>
		</fieldset>
	);
};

// PROPERTY REFUND
Form.propTypes = {
	setUrl: PropTypes.func.isRequired,
	setColor: PropTypes.func.isRequired,
	setIsValid: PropTypes.func.isRequired,
};
