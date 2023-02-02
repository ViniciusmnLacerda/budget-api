import { BudgetModel } from "../Models";

export default class BudgetService {
  public getBudget = async (ids: number[], id: number) => {
    const selectedProducts = await new BudgetModel().getBudget(ids, id);
    return selectedProducts;
  }
}