import { Request, Response } from 'express';
import { UserService } from "../Services";

export default class UserController {
  public findAll = async (req: Request, res: Response) => {
    const response = await new UserService().findAll();
    res.status(200).json(response);
  }
}