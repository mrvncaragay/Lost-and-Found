const User = require('../model/user');

exports.index = (req, res) => {
  const result = User.find().sort('name');
  res.status(200).json({ result });
  //res.send('Hi There!');
};
