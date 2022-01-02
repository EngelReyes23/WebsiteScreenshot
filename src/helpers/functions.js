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
