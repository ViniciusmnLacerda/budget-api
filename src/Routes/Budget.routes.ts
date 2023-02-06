import express from 'express';
import { BudgetController } from '../Controllers';
import { budgetMiddleware } from '../Middlewares';

const budgetRouter = express.Router();

budgetRouter.post(
  '/:id', 
  budgetMiddleware,
  new BudgetController().getBudget);

export default budgetRouter;