const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { questionService, bankService } = require('../services');

const createQuestion = catchAsync(async (req, res) => {
  const question = await questionService.createQuestion(req.body);
  if (req.body.exam) {
    await bankService.updateExamQuestionById(req.body.bank, { question: question._id });
  }
  res.status(httpStatus.CREATED).send(question);
});

const createQuestions = catchAsync(async (req, res) => {
  const questions = await questionService.createQuestions(req.body);
  res.status(httpStatus.CREATED).send(questions);
});

const getQuestions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['subject', 'subjectgroup', 'level']);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'populate']);
  options.populate = 'user';
  options.sortBy = 'createdAt:desc';

  const result = await questionService.queryQuestions(filter, options);
  res.send(result);
});

const getQuestion = catchAsync(async (req, res) => {
  const question = await questionService.getQuestionById(req.params.questionId);
  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
  }
  res.send(question);
});

const updateQuestion = catchAsync(async (req, res) => {
  const question = await questionService.updateQuestionById(req.params.questionId, req.body);
  res.send(question);
});

const deleteQuestion = catchAsync(async (req, res) => {
  await questionService.deleteQuestionById(req.params.questionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createQuestion,
  createQuestions,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
};
