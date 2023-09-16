const fs = require('fs');

async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/openai/whisper-large-v2",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

query("sample1.flac").then((response) => {
	console.log(JSON.stringify(response));
});