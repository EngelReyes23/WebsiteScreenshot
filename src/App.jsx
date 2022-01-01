import React, { useState } from "react";
import { Result } from "./components/Result";
import { validateUrl } from "./helpers/functions";

function App() {
	const [url, setUrl] = useState("");
	const [color, setColor] = useState("");
	const [validUrl, setValidUrl] = useState("");
	const [isValid, setIsValid] = useState(false);

	// TODO: trabajar en el diseño
	return (
		<>
			<h1>WebsiteScreenshot</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					setIsValid(true);
					setValidUrl(url);
				}}
			>
				<input
					type="text"
					value={url}
					onChange={({ target }) => {
						setUrl(target.value);
					}}
				/>

				<input
					type="color"
					value={color}
					onChange={({ target }) => {
						setColor(target.value);
					}}
				/>

				<button disabled={!validateUrl(url)}>Generate Screenshot</button>
			</form>

			{isValid && <Result url={validUrl} color={color} />}
		</>
	);
}

export default App;
