import { IProduct, IUser } from '../Interfaces';
import ProductModel from './Product.model';
import UserModel from './User.model';

const userModel = new UserModel();
const productModel = new ProductModel();

export default class BudgetModel {
  private getSelectedProducts = async (ids: number[]): Promise<(IProduct | undefined)[]> => {
    const products = await productModel.findAll();
    const selectedProducts = ids.map((id) => products.find((product: IProduct) => product.id === id))
    return selectedProducts;
  }

  private getUser = async (id: number):  Promise<(IUser | undefined)> => {
    const users = await userModel.findAll();
    const user = users.find((u) => u.id === id);
    return user;
  } 

  public getBudget = async (ids: number[], id: number) => {
    const selectedProducts = await this.getSelectedProducts(ids);
    const user = await this.getUser(id);
    if (user) {
      selectedProducts.forEach((product) => {
        if (product) product?.price === product?.price * (user.tax / 100)
      })
    }
    return selectedProducts;
  }
}
