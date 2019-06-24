import Joi from "@hapi/joi";

export default {
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
