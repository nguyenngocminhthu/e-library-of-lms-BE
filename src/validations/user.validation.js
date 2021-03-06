const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    userName: Joi.string().required(),
    userCode: Joi.string(),
    role: Joi.string().required().valid('leadership', 'admin', 'student', 'teacher'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    userName: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      classes: Joi.array(),
      userName: Joi.string(),
      phone: Joi.string(),
      address: Joi.string(),
      gender: Joi.number(),
      avt: Joi.string(),
      recentSubjectId: Joi.array(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
