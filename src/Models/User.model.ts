import axios from 'axios';
import { IGetUserResponse } from '../Interfaces';
import ErrorClient from '../Utils/ErrorClient';

export default class UserModel {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://mockend.com/juunegreiros/BE-test-api/users';
  }

  public findAll = async () => {
    try {
      const { data, status } = await axios.get<IGetUserResponse>(this.endpoint, {
        headers: {
          Accept: 'application/json',
        },
      });
      return { data, status };
    } catch (err) {
      throw new ErrorClient(404, 'Somethin is wrong')
    }
  }
}