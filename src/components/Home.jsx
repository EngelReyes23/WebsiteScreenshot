import React, { useState } from "react";
import { Form } from "./Form";
import { Result } from "./Result";

export const Home = () => {
	const [url, setUrl] = useState("");
	const [color, setColor] = useState("");
	const [isValid, setIsValid] = useState(false);

	return (
		<>
			{!isValid ? (
				<Form setUrl={setUrl} setColor={setColor} setIsValid={setIsValid} />
			) : (
				<Result url={url} color={color} setIsValid={setIsValid} />
			)}
		</>
	);
};
