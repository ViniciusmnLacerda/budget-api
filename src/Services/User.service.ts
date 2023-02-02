import { IUser } from "../Interfaces";
import { UserModel } from "../Models";

export default class UserService {
  public findAll = async (): Promise<IUser[]> => {
    const data = await new UserModel().findAll();
    return data;
  }
}