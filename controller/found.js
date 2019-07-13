const Found = require('../model/found');

exports.postFound = async (req, res) => {
	
	const newFound = new Found({
		...req.body
	})

	await newFound.save();

	res.send(newFound)
};
