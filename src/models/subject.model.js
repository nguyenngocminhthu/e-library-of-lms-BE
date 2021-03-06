const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subjectSchema = mongoose.Schema(
  {
    subName: {
      type: String,
      required: true,
      trim: true,
    },
    subCode: {
      type: String,
      required: true,
      trim: true,
    },
    subGroup: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'SubjectGroup' },
    teacher: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    file: {
      type: Number,
      required: false,
      default: 0,
    },
    status: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: '',
    },
    topic: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
    bank: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bank' }],
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classes' }],
    description: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
subjectSchema.plugin(toJSON);
subjectSchema.plugin(paginate);

subjectSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Subject
 */
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
