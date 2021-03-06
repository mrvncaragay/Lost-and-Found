const Joi = require('@hapi/joi');

exports.isBodyValid = (req, res, next) => {
  const modelRegex = /(\/api\/)/gi;
  const model = req.baseUrl.replace(modelRegex, '');
  let error = null;

  switch (model) {
    case 'auth':
      error = validateLogIn(req.body);
      break;
    case 'users':
      error = validateUser(req.route.methods.put, req.body);
      break;
    case 'properties':
      error = validateProperty(req.body);
      break;
    case 'organizations':
      error = validateOrganization(req.body);
      break;
    case 'lost':
      error = validateLost(req.body);
      break;
    case 'found':
      error = validateFound(req.body);
      break;
    case 'inquiry':
      error = validateInquiry(req.body);
      break;
  }
  if (error) return res.status(400).send(error.details[0].message);

  next();
};

function validateLost(req) {
  const schema = {
    dateRegistered: {
      date: Joi.date(),
      time: Joi.string()
    },
    description: Joi.string()
      .required()
      .min(3)
      .max(100),
    locatedAt: Joi.string()
      .required()
      .min(3)
      .max(50),
    owner: Joi.object({
      name: Joi.string().required(),
      email: Joi.allow(null),
      phone: Joi.string().required(),
      address: Joi.allow(null)
    }),
    propertyId: Joi.string().required()
  };

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateFound(req) {
  const schema = {
    dateRegistered: {
      date: Joi.date(),
      time: Joi.string()
    },
    description: Joi.string()
      .required()
      .min(3)
      .max(100),
    locatedAt: Joi.string()
      .required()
      .min(3)
      .max(50),
    owner: Joi.object({
      name: Joi.allow(null),
      email: Joi.allow(null),
      phone: Joi.allow(null),
      address: Joi.allow(null)
    }),
    propertyId: Joi.string().required()
  };

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateInquiry(req) {
  const schema = {
    dateRegistered: {
      date: Joi.date(),
      time: Joi.string()
    },
    description: Joi.string()
      .required()
      .min(3)
      .max(100),
    locatedAt: Joi.string()
      .required()
      .min(3)
      .max(50),
    owner: Joi.object({
      name: Joi.string().required(),
      email: Joi.allow(null),
      phone: Joi.string().required(),
      address: Joi.allow(null)
    }),
    propertyId: Joi.string().required()
  };

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateOrganization(req) {
  const schema = {
    name: Joi.string()
      .min(10)
      .max(100)
      .required(),
    organizationCode: Joi.string()
      .required()
      .min(3)
      .max(10),
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
    name: Joi.string()
      .min(10)
      .max(50)
      .required(),
    propertyCode: Joi.string()
      .required()
      .min(3)
      .max(10),
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
      .email()
      .error(error => {
        return {
          message: 'Invalid email or password.'
        };
      }),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
      .error(error => {
        return {
          message: 'Invalid email or password.'
        };
      })
  };

  const { error } = Joi.validate(req, schema);
  return error;
}

function validateUser(put, req) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .email(),
    password: Joi.string()
      .min(10)
      .max(255),
    propertyCode: Joi.string(),
    adminType: Joi.string()
      .valid('swAdmin', 'orgAdmin', 'propAdmin', 'security')
      .required()
      .error(error => {
        return {
          message: 'AdminType is required.'
        };
      }),
    organization: Joi.string(),
    property: Joi.string(),
    status: Joi.string().valid('active', 'inactive')
  };

  if (put) delete schema['password'];

  const { error } = Joi.validate(req, schema);
  return error;
}
