import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { generateScreenshotUrl } from "../helpers/functions";

const Spinner = ({ color }) => (
	<div style={{ color: color, backgroundColor: color }} />
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
			{!isVisible ? (
				<Spinner color={color} />
			) : (
				<section>
					<div>
						<button
							onClick={() => {
								setIsValid(false);
							}}
						>
							Back
						</button>
						<a href={downloadUrl}>Download</a>
					</div>
					<div>
						<img src={downloadUrl} alt="screenshot" />
					</div>
				</section>
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
