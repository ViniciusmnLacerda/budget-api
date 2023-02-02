import axios from 'axios';
import { IGetUserResponse } from '../Interfaces';

export default class UserModel {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://mockend.com/juunegreiros/BE-test-api/users';
  }

  public findAll = async () => {
    const { data } = await axios.get<IGetUserResponse>(this.endpoint);
    return data;
  }
}