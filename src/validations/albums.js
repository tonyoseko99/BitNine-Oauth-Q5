const Joi = require("@hapi/joi");

const validateAlbum = (album) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    albumTitle: Joi.string().min(3).max(50).required(),
  });
  return schema.validate(album);
};

module.exports = { validateAlbum };
