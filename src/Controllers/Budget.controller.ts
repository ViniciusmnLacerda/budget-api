import { Request, Response } from 'express';
import { BudgetService } from "../Services";

export default class BudgetController {
  public getBudget = async (req: Request, res: Response) => {
    const { body: { ids }, params: { id } } = req;
    const selectedProducts = await new BudgetService().getBudget(ids, +id);
    res.status(200).json(selectedProducts);
  }
}