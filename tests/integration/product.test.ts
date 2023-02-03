import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import App from '../../src/app';
import { ProductModel } from '../../src/Models';
import { products } from '../mocks/product.mock';

chai.use(chaiHttp);

const productModel = new ProductModel();
const { app } = new App();

describe('Products route tests', function () {
  afterEach(function() {
    sinon.restore();
  })

  it('should return the list of all products', async function() {
    sinon.stub(productModel, 'findAll').resolves(products.data);

    const { body, status } = await chai.request(app).get('/products');
    expect(body).to.be.deep.equal(products.data);
    expect(status).to.be.equal(200);
  })
})