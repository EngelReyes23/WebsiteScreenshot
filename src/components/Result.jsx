import React, { useEffect, useState } from "react";
import { generateScreenshotUrl, handleDownload } from "../helpers/functions";

export const Result = ({ url }) => {
	const [urlDownload, setUrlDownload] = useState("");

	useEffect(() => {
		generateScreenshotUrl(url).then((res) => {
			setUrlDownload(res);
		});
	}, [url]);

	return (
		// TODO: Trabajar en el diseño del resultado
		<div>
			<h2>Result</h2>
			<img src={urlDownload} alt="screenshot" />
			<br />
			<button
				onClick={() => {
					handleDownload(urlDownload);
				}}
			>
				Download
			</button>
		</div>
	);
};
