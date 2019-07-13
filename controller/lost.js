const Lost = require('../model/lost');

exports.postLost = async (req, res) => {

	const newLost = new Lost({
		...req.body
	})

	await newLost.save();

	res.send(newLost)
};

// const newFound = new Lost({
//   dateFound: Date.now,
//   description: 'tester that tester is test',
//   lostAt: 'locker heart then go',
//   recorder: 'Secy 1'
// });

// newFound.save();
