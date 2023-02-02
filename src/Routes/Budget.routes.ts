import express from 'express';
import { BudgetController } from '../Controllers';

const budgetRouter = express.Router();

budgetRouter.get('/:id', new BudgetController().getBudget);

export default budgetRouter;