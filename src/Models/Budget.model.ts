import { IProduct, IUser } from '../Interfaces';


export default class BudgetModel {
  public getBudget = async (selectedProducts: IProduct[], { tax }: IUser): Promise<number> => {
    const budget = selectedProducts
      .reduce((acc, { price }) => acc + ((price * tax) / 100), 0);
    
    return budget;
  }
}
