import { ProductModel } from "../Models";

export default class ProductService {
  public findAll = async () => {
    const data = await new ProductModel().findAll();
    return data;
  }
}