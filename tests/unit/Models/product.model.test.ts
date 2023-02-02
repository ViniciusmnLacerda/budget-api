import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { ProductModel } from '../../../src/Models';
import { products } from '../../mocks/product.mock';

chai.use(sinonChai);

describe('Products model test', function() {

  afterEach(function() {
    sinon.restore();
  })

  it('should return the list of all products', async function() {
    sinon.stub(axios, 'get').resolves(products);
    const data = await new ProductModel().findAll();

    expect(data).to.be.deep.equal(products.data);
    expect(axios.get).to.have.been.calledWith('https://mockend.com/juunegreiros/BE-test-api/products');
  })
});