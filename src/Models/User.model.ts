import axios from 'axios';
import { IGetUserResponse } from '../Interfaces';

export default class UserModel {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://mockend.com/juunegreiros/BE-test-api/users';
  }

  public async findAll() {
    try {
      const { data, status } = await axios.get<IGetUserResponse>(this.endpoint, {
        headers: {
          Accept: 'application/json',
        },
      });
      return { data, status };
    } catch (err) {
      console.log('Unexpected error: ', err);
    }
  }
}