const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.runCompletion = async(payload) => {
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		// model: "text-chat-gpt",
		prompt: payload,
		"max_tokens": 2048
	});
	return completion
	// console.log(completion.data.choices[0].text);
}