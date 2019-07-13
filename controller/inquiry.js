const Inquiry = require('../model/inquiry');

exports.postInquiry = async (req, res) => {
	
	const newInquiry = new Inquiry({
		...req.body
	})

	await newInquiry.save();

	res.send(newInquiry)
};