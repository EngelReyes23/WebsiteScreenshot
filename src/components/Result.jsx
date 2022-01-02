import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { generateScreenshotUrl } from "../helpers/functions";
import style from "./Spinner.module.css";

const Spinner = ({ color }) => (
	<div
		style={{ color: color, backgroundColor: color }}
		className={style.loader}
	/>
);

export const Result = ({ url, color, setIsValid }) => {
	// Download URL
	const [downloadUrl, setDownloadUrl] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(false);

		generateScreenshotUrl(url, color.replace("#", "")).then((res) => {
			setDownloadUrl(res);
			setIsVisible(true);
		});
	}, [url, color]);

	return (
		// TODO: Trabajar en el diseño del resultado
		<div>
			<h2>Result</h2>

			{!isVisible ? (
				<Spinner color={color} />
			) : (
				<>
					<div>
						<img src={downloadUrl} alt="screenshot" />
					</div>
					<div>
						<button
							onClick={() => {
								setIsValid(false);
							}}
						>
							Back
						</button>
						<a download="Screenshot.png" href={downloadUrl}>
							Download
						</a>
					</div>
				</>
			)}
		</div>
	);
};

// PROPERTY REFUND
Result.propTypes = {
	url: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	setIsValid: PropTypes.func.isRequired,
};
