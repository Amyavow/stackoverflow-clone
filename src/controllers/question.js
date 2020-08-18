/* eslint-disable consistent-return */
import Question from '../models/Question';

export default class QuestionController {
  static getAllQuestions(req, res) {
    try {
      Question.find({}, (err, questions) => {
        if (err) {
          res.send(err);
        }
        if (!Array.isArray(questions) || !questions.length) {
          res.status(200).json({
            msg: 'No questions found',
          });
        }
        return res.status(200).json({
          success: true,
          data: questions,
        });
      })
        .sort({ date: 'desc' });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static askQuestion(req, res) {
    try {
      const { title, textbody, name } = req.body;
      const newQuestion = new Question({
        title,
        textbody,
        user: req.user.id,
        name,
      });
      newQuestion.save((err, question) => {
        if (err) {
          return res.status(400).send({
            message: err,
          });
        }

        return res.status(201).json({
          success: true,
          data: {
            question,
          },
        });
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static answerQuestion(req, res) {
    try {
      const { text, name } = req.body;
      Question.findById(req.params.questionId, (err, question) => {
        if (err) {
          res.send(err);
        }

        if (!question) {
          return res.json({
            message: 'Question not found',
          });
        }
        const answer = {
          user: req.user.id,
          name,
          text,
        };
        question.answers.unshift(answer);

        question.save((questionerr, questionA) => {
          if (questionerr) {
            return res.status(400).send({
              message: err,
            });
          }
          return res.status(201).json({
            success: true,
            data: {
              questionA,
            },
          });
        });
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static upvote(req, res) {
    Question.findById(req.params.questionId, (err, question) => {
      if (err) {
        res.send(err);
      }
      if (!question) {
        return res.json({
          message: 'Question not found',
        });
      }
      if (question.upvotes.filter(
        (upvote) => upvote.user.toString() === req.user.id.toString(),
      ).length > 0) {
        return res.status(400).json({
          message: 'User gave an upvote for this question already',
        });
      }
      question.upvotes.unshift(
        { user: req.user.id },
      );
      question.save((questionerr, questionU) => {
        if (questionerr) {
          return res.status(400).send({
            message: questionerr,
          });
        }
        return res.status(201).json({
          success: true,
          data: {
            questionU,
          },
        });
      });
    });
  }

  static downvote(req, res) {
    Question.findById(req.params.questionId, (err, question) => {
      if (err) {
        res.send(err);
      }
      if (!question) {
        return res.json({
          message: 'Question not found',
        });
      }
      if (question.downvotes.filter(
        (downvote) => downvote.user.toString() === req.user.id.toString(),
      ).length > 0) {
        return res.status(400).json({
          message: 'User gave a downvote for this question already',
        });
      }
      question.downvotes.unshift(
        { user: req.user.id },
      );
      question.save((questionerr, questionD) => {
        if (questionerr) {
          return res.status(400).send({
            message: questionerr,
          });
        }
        return res.status(201).json({
          success: true,
          data: {
            questionD,
          },
        });
      });
    });
  }

  static searchQuestions(req, res) {
    Question.find({ title: { $regex: req.query.title, $options: 'i' } }, (err, response) => {
      if (err) {
        res.send(err);
      }
      return res.status(200).json({
        success: true,
        data: response,
      });
    })
      .sort({ date: 'desc' });
  }
}
