import React, { useState } from "react";
import { Result } from "./components/Result";
import { validateUrl } from "./helpers/functions";

function App() {
	const [url, setUrl] = useState("");
	const [isValid, setIsValid] = useState(false);

	// TODO: trabajar en el diseño
	return (
		<>
			<h1>WebsiteScreenshot</h1>

			<input
				type="text"
				value={url}
				onChange={({ target }) => {
					setUrl(target.value);
					setIsValid(validateUrl(url));
				}}
			/>

			{isValid && <Result url={url} />}
		</>
	);
}

export default App;
