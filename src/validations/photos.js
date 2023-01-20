const Joi = require("@hapi/joi");

const validatePhoto = (photo) => {
  const schema = Joi.object({
    albumId: Joi.string().required(),
    photoTitle: Joi.string().min(3).max(50).required(),
    imageUrl: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .required(),
  });
  return schema.validate(photo);
};

module.exports = { validatePhoto };
