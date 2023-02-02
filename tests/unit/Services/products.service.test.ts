import { expect } from 'chai';
import sinon from 'sinon';
import { ProductService } from '../../../src/Services';
import { products } from '../../mocks/product.mock';

const productService = new ProductService();

describe('Product service test', function() {
  afterEach(function() {
    (productService.findAll as sinon.SinonStub).restore();
  })

  it('should return the list of all products', async function () {
    sinon.stub(productService, 'findAll').resolves(products.data);

    const result = await productService.findAll();

    expect(result).to.be.deep.equal(products.data);
  });
});