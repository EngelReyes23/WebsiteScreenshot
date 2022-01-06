const regexUrl =
	/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_.~#?&=]*)/;

// Valid that the URL is valid
export const validateUrl = (url) => regexUrl.test(url);

// Generates a link that forces the browser to download a file
export const generateDownloadUrl = async (url) => {
	const response = await fetch(url);
	const blob = await response.blob();
	return URL.createObjectURL(blob);
};

export const generateScreenshotUrl = async (url, color = "0000ff") => {
	const apiUrl =
		"https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
		url +
		"&color=" +
		color;
	return await generateDownloadUrl(apiUrl);
};

// Return an array of 8 random colors
export const getRandomColors = () => {
	// Generates an RGB color
	const generateColor = () => {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return [r, g, b];
	};

	// Generates an HEX color
	const generateHexColor = (color) =>
		"#" + color.map((c) => c.toString(16).padStart(2, "0")).join("");

	// Generates an array of 8 random colors
	const colors = [];
	for (let i = 0; i < 8; i++) {
		colors.push(generateHexColor(generateColor()));
	}

	return colors;
};
