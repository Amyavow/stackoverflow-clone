import { Router } from 'express';
import AuthController from '../controllers/auth';
import QuestionController from '../controllers/question';

const QuestionRouter = Router();

QuestionRouter.route('/')
  .post(AuthController.signinRequired,
    QuestionController.askQuestion);
QuestionRouter.get('/question', QuestionController.getAllQuestions);

QuestionRouter.route('/answers/:questionId')
  .post(AuthController.signinRequired,
    QuestionController.answerQuestion);

QuestionRouter.post('/upvote/:questionId', AuthController.signinRequired, QuestionController.upvote);
QuestionRouter.post('/downvote/:questionId', AuthController.signinRequired, QuestionController.downvote);
QuestionRouter.get('/search/', QuestionController.searchQuestions);
export default QuestionRouter;
