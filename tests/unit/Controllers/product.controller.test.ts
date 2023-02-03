import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { ProductController } from '../../../src/Controllers';
import { ProductService } from '../../../src/Services';
import { products } from '../../mocks/product.mock';

chai.use(sinonChai);

const productController = new ProductController();
const productService = new ProductService();

describe('Product controller test', function() {
  const req = {} as Request;
  const res = {} as Response; 

  afterEach(function() {
    sinon.restore();
  })

  it('should return the list of all products with status 200', async function() {
    sinon.stub(productService, 'findAll').resolves(products.data);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    
    await productController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products.data);
  });
});