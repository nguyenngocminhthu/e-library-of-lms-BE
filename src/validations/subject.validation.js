const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSubject = {
  body: Joi.object().keys({
    subCode: Joi.string().required(),
    subName: Joi.string().required(),
    subGroup: Joi.string().required(),
    teacher: Joi.string().required(),
    file: Joi.number(),
    status: Joi.number(),
    image: Joi.string(),
    year: Joi.string().required(),
    semester: Joi.number().required(),
    description: Joi.string(),
    topic: Joi.array(),
    bank: Joi.array(),
    students: Joi.array().items(Joi.string().length(24)),
  }),
};

const createSubjectByFile = {
  body: Joi.array().items(
    Joi.object().keys({
      subCode: Joi.string().required(),
      subName: Joi.string().required(),
      subGroup: Joi.string().required(),
      teacher: Joi.string().required(),
      file: Joi.number(),
      status: Joi.number(),
      image: Joi.string(),
      year: Joi.string().required(),
      semester: Joi.number().required(),
      description: Joi.string(),
      topic: Joi.array(),
      bank: Joi.array(),
      students: Joi.array().items(Joi.string().length(8)),
    })
  ),
};

const getSubjects = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    populate: Joi.string(),
    subCode: Joi.string(),
    subName: Joi.string(),
    subGroup: Joi.string(),
    teacher: Joi.string(),
    year: Joi.string(),
    semester: Joi.number(),
  }),
};

const getSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string().custom(objectId),
  }),
};

const updateSubject = {
  params: Joi.object().keys({
    subjectId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      subCode: Joi.string(),
      subName: Joi.string(),
      subGroup: Joi.string(),
      teacher: Joi.string(),
      status: Joi.number(),
      image: Joi.string(),
      file: Joi.number(),
      topic: Joi.array(),
      bank: Joi.array(),
      year: Joi.string(),
      semester: Joi.number(),
      description: Joi.string(),
      students: Joi.array().items(Joi.string().length(24)),
    })
    .min(1),
};

const deleteSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSubject,
  createSubjectByFile,
  getSubjects,
  getSubject,
  updateSubject,
  deleteSubject,
};
