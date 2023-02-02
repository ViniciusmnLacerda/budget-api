import express from 'express';
import { userRouter } from './Routes';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use('/user', userRouter)
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}