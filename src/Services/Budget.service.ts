import { IProduct, IUser } from "../Interfaces";
import { BudgetModel, ProductModel, UserModel } from "../Models";
import ErrorClient from "../Utils/ErrorClient";

const userModel = new UserModel();
const productModel = new ProductModel();

export default class BudgetService {
  private getSelectedProducts = async (ids: number[]): Promise<IProduct[]> => {
    const products = await productModel.findAll();
    const selectedProducts = ids.map((id) => products.find((product: IProduct) => product.id === id));
    if (!selectedProducts.every((product) => product !== undefined)) throw new ErrorClient(422, 'Invalid id');
    return selectedProducts as IProduct[];
  }

  private getUser = async (id: number): Promise<IUser> => {
    const users = await userModel.findAll();
    const user = users.find((u) => u.id === id);
    if (!user) throw new ErrorClient(422, 'User not found');
    return user;
  } 

  public getBudget = async (ids: number[], id: number): Promise<number> => {
    const selectedProducts = await this.getSelectedProducts(ids);
    const user = await this.getUser(id);
    const budget = await new BudgetModel().getBudget(selectedProducts, user);
    return budget;
  }
}