import { Router } from 'express';
import UserController from '../controllers/user';

const UserRouter = Router();

UserRouter.route('/search')
  .get(UserController.searchUsers);

export default UserRouter;
