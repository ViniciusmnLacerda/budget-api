import express from 'express';
import 'express-async-errors';
import errorMiddleware from './Middlewares/Error.middleware';
import { userRouter } from './Routes';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use('/users', userRouter);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}