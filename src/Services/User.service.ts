import { UserModel } from "../Models";

export default class UserService {
  public findAll = async () => {
    const data = await new UserModel().findAll();
    return data;
  }
}