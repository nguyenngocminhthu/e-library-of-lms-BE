const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lessonSchema = mongoose.Schema(
  {
    subject: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Subject' },
    topic: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Topic' },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    file: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'File' }],
    video: { type: String, required: true },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classes' }],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lessonSchema.plugin(toJSON);
lessonSchema.plugin(paginate);

lessonSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Lesson
 */
const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
