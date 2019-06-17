const Admin = require('../model/admin');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  let admin = await Admin.findOne({
    email: req.body.email
  });
  if (!admin) return res.status(400).send('Invalid email or password.');

  //const validPassword = await bcrypt.compare(req.body.password, user.password);
  //if (!validPassword) return res.status(400).send('Invalid email or password.');

  res.send(admin.jwtToken);
};
