import { Router } from 'express';
import AuthController from '../controllers/auth';

const AuthRouter = Router();

AuthRouter.post(
  '/signup',
  AuthController.signup,
);
AuthRouter.post(
  '/signin',
  AuthController.signin,
);
export default AuthRouter;
