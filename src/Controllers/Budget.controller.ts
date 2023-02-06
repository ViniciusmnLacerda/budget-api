import { Request, Response } from 'express';
import { BudgetService } from "../Services";

export default class BudgetController {
  public getBudget = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const ids = req.body;
    const budget = await new BudgetService().getBudget(ids, +id);
    res.status(200).json({ budget });
  }
}