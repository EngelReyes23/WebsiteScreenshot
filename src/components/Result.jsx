import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { generateScreenshotUrl } from "../helpers/functions";
import style from "./Spinner.module.css";

const Spinner = () => <div className={style.gyro}></div>;

export const Result = ({ url, color }) => {
	// Download URL
	const [downloadUrl, setDownloadUrl] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		generateScreenshotUrl(url, color.replace("#", "")).then((res) => {
			setIsVisible(false);
			setDownloadUrl(res);
		});
	}, [url, color]);

	return (
		// TODO: Trabajar en el diseño del resultado
		<div>
			<h2>Result</h2>

			{!isVisible && <Spinner />}

			<div>
				<img
					hidden={!isVisible}
					src={downloadUrl}
					alt="screenshot"
					onChange={() => setIsVisible(false)}
					onLoad={() => {
						console.log(isVisible);
						setIsVisible(true);
					}}
				/>
			</div>
		</div>
	);
};

// PROPERTY REFUND
Result.propTypes = {
	url: PropTypes.string.isRequired,
};
