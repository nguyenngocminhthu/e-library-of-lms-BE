const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const notiSchema = mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    to: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
    },
    type: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      require: true,
    },
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
notiSchema.plugin(toJSON);
notiSchema.plugin(paginate);

notiSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Noti
 */
const Noti = mongoose.model('Notification', notiSchema);

module.exports = Noti;
