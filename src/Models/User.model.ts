import axios from 'axios';
import { IUser } from '../Interfaces';

export default class UserModel {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://mockend.com/juunegreiros/BE-test-api/users';
  }

  public findAll = async (): Promise<IUser[]> => {
    const { data } = await axios.get(this.endpoint);
    return data;
  }
}