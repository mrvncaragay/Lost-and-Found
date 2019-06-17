const User = require('../model/user');

exports.index = async (req, res) => {
  const result = await User.find()
    .select('name email adminType')
    .sort('name');

  res.send(result);
  //res.send('Hi There!');
};
