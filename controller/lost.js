const Lost = require('../model/lost');

exports.postLost = async (req, res) => {
	
	const newLost = new Lost({
		...req.body
	})

	await newLost.save();

	res.send(newLost)
};