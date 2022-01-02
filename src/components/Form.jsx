import React, { useState } from "react";
import { validateUrl } from "../helpers/functions";
import { Result } from "./Result";

export const Form = () => {
	const [webAddress, setWebAddress] = useState("");
	const [selectedColor, setSelectedColor] = useState("");
	const [url, setUrl] = useState("");
	const [color, setColor] = useState("#0000ff");
	const [isValid, setIsValid] = useState(false);

	return (
		<>
			{!isValid ? (
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
			) : (
				<Result url={url} color={color} setIsValid={setIsValid} />
			)}
		</>
	);
};
