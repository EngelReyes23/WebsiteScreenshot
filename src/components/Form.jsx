import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { getRandomColors, validateUrl } from "../helpers/functions";

export const Form = ({ setUrl, setColor, setIsValid }) => {
	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("#ffffff");
	const [colorList, setColorList] = useState(getRandomColors());

	const btn = useRef();

	const handleInputChange = (e) => {
		setWebAddress(e.target.value);
		if (validateUrl(e.target.value)) {
			btn.current.style.border = "solid white";
			btn.current.style.color = "white";
		} else {
			btn.current.style.border = "solid gray";
			btn.current.style.color = "gray";
		}
	};

	const handleClick = () => {
		setUrl(webAddress);
		setColor(selectedColor);
		setIsValid(true);
	};

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
					onChange={handleInputChange}
				/>
				<label className="form__label" htmlFor="webAddress">
					Web Address
				</label>
			</div>
			<fieldset style={{ borderColor: selectedColor }}>
				<legend>[ Background Colors ]</legend>
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
			<div className="form__buttons">
				<button
					className="button button-random"
					onClick={() => setColorList(getRandomColors())}
				>
					Generate Random Colors
					<span></span>
				</button>
				<button
					ref={btn}
					className="button button-screenshot"
					disabled={!validateUrl(webAddress)}
					onClick={handleClick}
				>
					Generate Screenshot
					<span />
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
