import { Request, Response } from 'express';
import { ProductService } from "../Services";

export default class ProductController {
  public findAll = async (req: Request, res: Response) => {
    const response = await new ProductService().findAll();
    res.status(200).json(response);
  }
}