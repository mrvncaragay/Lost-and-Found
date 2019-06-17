const Joi = require('@hapi/joi');

exports.isBodyValid = (req, res, next) => {
  const modelRegex = /(\/api\/)/gi;
  const model = req.baseUrl.replace(modelRegex, '');
  let error = null;

  switch (model) {
    case 'auth':
      error = validateLogIn(req.body);
      break;
    case 'admins':
      error = validateAdmin(req.route.methods.put, req.body);
      break;
    case 'properties':
      error = validateProperty(req.body);
      break;
    case 'organizations':
      error = validateOrganization(req.body);
      break;
  }

  if (error) return res.status(400).send(error.details[0].message);

  next();
};

function validateOrganization(req) {
  const schema = {
    propertyCode: Joi.string()
      .required()
      .min(3)
      .max(10),
    name: Joi.string()
      .min(10)
      .max(100)
      .required(),
    address: Joi.string()
      .min(10)
      .max(100)
      .required()
  };

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateProperty(req) {
  const schema = {
    propertyCode: Joi.string()
      .required()
      .min(3)
      .max(10),
    name: Joi.string()
      .min(10)
      .max(50)
      .required(),
    address: Joi.string()
      .min(10)
      .max(100)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(20)
      .required(),
    organization: Joi.string().required()
  };

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateLogIn(req) {
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

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateAdmin(put, req) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    password: Joi.string()
      .min(10)
      .max(255)
      .required(),
    adminType: Joi.string()
      .valid('swAdmin', 'orgAdmin', 'propAdmin')
      .required(),
    propertyCode: Joi.string()
      .required()
      .min(3)
      .max(10)
  };

  if (put) delete schema['password'];

  const { error } = Joi.validate(req, schema);
  return error;
}
