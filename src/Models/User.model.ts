import axios from 'axios';
import { IGetUserResponse } from '../Interfaces';
import ErrorClient from '../Utils/ErrorClient';

export default class UserModel {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://mockend.com/juunegreiros/BE-test-api/users';
  }

  public findAll = async () => {
    const { data, status } = await axios.get<IGetUserResponse>(this.endpoint, {
      headers: {
        Accept: 'application/json',
      },
    });
    if (!data) throw new ErrorClient(status, 'Something is wrong');
    return { data, status };
  }
}