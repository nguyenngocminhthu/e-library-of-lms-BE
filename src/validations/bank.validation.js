const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createExam = {
  body: Joi.object().keys({
    fileType: Joi.number().required(),
    examName: Joi.string().required(),
    examType: Joi.number().required(),
    subject: Joi.string().required(),
    user: Joi.string().required(),
    status: Joi.number(),
  }),
};

const getExams = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    status: Joi.number(),
    subject: Joi.string(),
    user: Joi.string(),
  }),
};

const getExam = {
  params: Joi.object().keys({
    examId: Joi.string().custom(objectId),
  }),
};

const updateExam = {
  params: Joi.object().keys({
    examId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      fileType: Joi.number(),
      examName: Joi.string(),
      examType: Joi.number(),
      subject: Joi.string(),
      user: Joi.string(),
      status: Joi.number(),
    })
    .min(1),
};

const deleteExam = {
  params: Joi.object().keys({
    examId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    subjectId: Joi.string(),
  }),
};

module.exports = {
  createExam,
  getExam,
  getExams,
  updateExam,
  deleteExam,
};