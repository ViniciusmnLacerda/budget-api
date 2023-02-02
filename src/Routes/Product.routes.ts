import express from 'express';
import { ProductController } from '../Controllers';

const productRouter = express.Router();

productRouter.get('/', new ProductController().findAll);

export default productRouter;