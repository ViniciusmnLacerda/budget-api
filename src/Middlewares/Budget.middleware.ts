import { NextFunction, Request, Response } from 'express';
import ErrorClient from '../Utils/ErrorClient';

const budgetMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const ids = req.body;
  const { id } = req.params
  const onlyNumbers = new RegExp('^[0-9]+$')
  if (!ids.every((id: any) => typeof id === 'number')) throw new ErrorClient(422, 'Fields must be numbers');
  if (!onlyNumbers.test(id)) throw new ErrorClient(400, 'Id must contain only number');
  next()
};

export default budgetMiddleware;