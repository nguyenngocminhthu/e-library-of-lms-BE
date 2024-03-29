const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const { toJSON, paginate } = require('./plugins');

const questionSchema = mongoose.Schema(
  {
    quesCode: {
      type: String,
      trim: true,
      default: nanoid(),
    },
    quesName: {
      type: String,
      required: true,
      trim: true,
    },
    answers: {
      type: Array,
    },
    correct: {
      type: Array,
      required: true,
    },
    correctEssay: {
      type: String,
    },
    level: {
      type: Number,
      default: 0,
      /**
       * @description:
       * 0 = easy
       * 1 = medium
       * 2 = difficult
       */
    },
    quesType: { type: Number, default: 0 },
    examType: { type: Number, required: true, default: 0 },
    subjectgroup: { type: mongoose.Schema.Types.ObjectId, ref: 'SubjectGroup' },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    bank: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bank' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
questionSchema.plugin(toJSON);
questionSchema.plugin(paginate);

questionSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Question
 */
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
