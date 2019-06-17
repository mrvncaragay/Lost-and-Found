const User = require('../model/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  let user = await User.findOne({
    email: req.body.email
  });
  if (!user) return res.status(400).send('Invalid email or password.');

  //const validPassword = await bcrypt.compare(req.body.password, user.password);
  //if (!validPassword) return res.status(400).send('Invalid email or password.');

  res.send(user.jwtToken);
};
