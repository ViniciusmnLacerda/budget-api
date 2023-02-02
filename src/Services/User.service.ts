import { UserModel } from "../Models";

export default class UserService {
  public findAll = async () => {
    const response = await new UserModel().findAll();
    return response;
  }
}