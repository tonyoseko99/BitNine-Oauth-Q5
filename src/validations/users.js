// import the @hapi/joi library for ease of validations
const Joi = require("@hapi/joi");

// validate user
const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required,
  });
  return schema.validate(user);
};

module.exports = { validateUser };
