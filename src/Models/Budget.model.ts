import { IProduct, IUser } from '../Interfaces';
import ErrorClient from '../Utils/ErrorClient';
import ProductModel from './Product.model';
import UserModel from './User.model';

const userModel = new UserModel();
const productModel = new ProductModel();

export default class BudgetModel {
  private getSelectedProducts = async (ids: number[]): Promise<IProduct[]> => {
    const products = await productModel.findAll();
    const selectedProducts = ids.map((id) => products.find((product: IProduct) => product.id === id));
    if (!selectedProducts.every((product) => product !== undefined)) throw new ErrorClient(422, 'Invalid id');
    return selectedProducts as IProduct[];
  }

  private getUser = async (id: number):  Promise<IUser> => {
    const users = await userModel.findAll();
    const user = users.find((u) => u.id === id);
    if (!user) throw new ErrorClient(422, 'User not found');
    return user;
  } 

  public getBudget = async (ids: number[], id: number) => {
    const selectedProducts = await this.getSelectedProducts(ids);
    const user = await this.getUser(id);
    if (user) {
      selectedProducts.map((product) => {
        if (product) product?.price === product?.price * (user.tax / 100)
      })
    }
    return selectedProducts;
  }
}
