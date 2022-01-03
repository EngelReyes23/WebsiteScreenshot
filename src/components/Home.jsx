import { useState } from "react";
import style from "./css/Home.module.css";
import { Form } from "./Form";
import { Result } from "./Result";

export const Home = () => {
	const [url, setUrl] = useState("");
	const [color, setColor] = useState("");
	const [isValid, setIsValid] = useState(false);

	return (
		<>
			<h1 className={style.title}>Website Screenshots</h1>

			<main className={style.container}>
				{!isValid ? (
					<Form setUrl={setUrl} setColor={setColor} setIsValid={setIsValid} />
				) : (
					<Result url={url} color={color} setIsValid={setIsValid} />
				)}
			</main>
		</>
	);
};
