import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'myUser',
  },
  title: {
    type: String,
    required: true,
  },
  textbody: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  upvotes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'myUser',
      },
    },
  ],
  downvotes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'myUser',
      },
    },
  ],
  answers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'myUser',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('myQuestion', QuestionSchema);
