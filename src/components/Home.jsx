import { useState } from "react";
import { Form } from "./Form";
import { Result } from "./Result";

export const Home = () => {
	const [url, setUrl] = useState("");
	const [color, setColor] = useState("");
	const [isValid, setIsValid] = useState(false);

	return (
		<>
			<h1>Website Screenshots</h1>

			<main>
				{!isValid ? (
					<Form setUrl={setUrl} setColor={setColor} setIsValid={setIsValid} />
				) : (
					<Result url={url} color={color} setIsValid={setIsValid} />
				)}
			</main>
		</>
	);
};
