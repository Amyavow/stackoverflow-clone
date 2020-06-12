import { Router } from 'express';

import AuthRouter from './auth';
import QuestionRouter from './question';
import UserRouter from './user';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/questions', QuestionRouter);
router.use('/users', UserRouter);

export default router;
