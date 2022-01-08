import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { generateScreenshotUrl } from "../helpers/functions";

const Spinner = ({ color }) => (
	<div
		style={{ color, backgroundColor: color }}
		className="loader animate__animated animate__fadeIn"
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
			{!isVisible ? (
				<Spinner color={color} />
			) : (
				<section className="result animate__animated animate__zoomIn">
					<div className="result__buttons animate__animated animate__fadeInDown animate__delay-1s">
						<button
							className="button button-result"
							style={{ color, border: `solid ${color}` }}
							onClick={() => {
								document
									.querySelector(".animate__zoomIn")
									.classList.add("animate__zoomOut");

								setTimeout(() => {
									setIsValid(false);
								}, 500);
							}}
						>
							Back
							<span />
						</button>
						<a
							download="Screenshot.png"
							className="button button-result"
							style={{ color, border: `solid ${color}` }}
							href={downloadUrl}
						>
							Download
							<span />
						</a>
					</div>
					<div className="result__img">
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
