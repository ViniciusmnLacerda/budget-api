import express from 'express';
import { UserController } from '../Controllers';

const userRouter = express.Router();

userRouter.get('/', new UserController().findAll);

export default userRouter;