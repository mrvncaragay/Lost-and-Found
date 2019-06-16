const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');

exports.isBodyValid = (req, res, next) => {
  const { error } = validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  next();
};

exports.isTokenValid = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT);
    req.user = decoded;
    next();
  } catch (error) {
    //400 bad request client send us is invalid
    res.status(400).send('Invalid token.');
  }
};

function validate(req) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
}
