import axios from 'axios';
import { IProduct } from '../Interfaces';

export default class ProductModel {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://mockend.com/juunegreiros/BE-test-api/products';
  }

  public findAll = async (): Promise<IProduct[]> => {
    const { data } = await axios.get(this.endpoint);
    return data;
  }
}