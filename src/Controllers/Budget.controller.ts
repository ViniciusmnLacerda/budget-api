import { Request, Response } from 'express';
import { BudgetService } from "../Services";

export default class BudgetController {
  public getBudget = async (req: Request, res: Response) => {
    const { id, ids } = req.params; 
    const arrayIds = JSON.parse(ids) as number[];
    const budget = await new BudgetService().getBudget(arrayIds, +id);
    res.status(200).json({ budget });
  }
}