import { AxiosError } from 'axios';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import ErrorClient from '../Utils/ErrorClient';

const errorMiddleware: ErrorRequestHandler = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  if (err instanceof ErrorClient) {
    return res.status(err.status).json({ message: err.message });
  }
  if (err instanceof AxiosError) {
    return res.status(Number(err.response?.status)).json({ message: 'Not found' });
  }
  if (err instanceof SyntaxError) {
    return res.status(422).json({ message: 'Fields must be numbers'})
  }
  
  return res.status(500).json({ message: 'Internal error' });
};

export default errorMiddleware;