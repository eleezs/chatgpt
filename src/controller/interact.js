const { runCompletion } = require( "../helper/openai");
const doc = require("../helper/pdfGenerator");

exports.interact = async(req, res) => {
	try {
		const { text } = req.body;
		if(!text.length) return res.status(422).json({ message: 'Text can not be empty '})

		const response = await runCompletion(text)

		console.log(response)
		console.log(response.data.choices[0].text);
		const pdf = doc()
		return res.status(200).json({ message: 'Here is your response', data: { Question: text, response: response.data.choices[0].text }})
		
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Something went wrong' })
	}
}