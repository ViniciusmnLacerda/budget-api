import { IProduct } from "../Interfaces";
import { ProductModel } from "../Models";

export default class ProductService {
  public findAll = async (): Promise<IProduct[]> => {
    const data = await new ProductModel().findAll();
    return data;
  }
}