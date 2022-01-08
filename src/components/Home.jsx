import { useState } from "react";
import "./css/style.css";
import { Form } from "./Form";
import { Header } from "./Header";
import { Result } from "./Result";

export const Home = () => {
	const [url, setUrl] = useState("");
	const [color, setColor] = useState("");
	const [isValid, setIsValid] = useState(false);

	return (
		<>
			<Header />

			<main className="main">
				{!isValid ? (
					<Form setUrl={setUrl} setColor={setColor} setIsValid={setIsValid} />
				) : (
					<Result url={url} color={color} setIsValid={setIsValid} />
				)}
			</main>
		</>
	);
};
