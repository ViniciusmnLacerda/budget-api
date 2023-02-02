import { expect } from 'chai';
import sinon from 'sinon';
import { ProductModel, UserModel } from '../../../src/Models';
import { BudgetService } from '../../../src/Services';
import { invalidId, invalidIdBody, selectedProducts, validBody, validId } from '../../mocks/budget.mock';
import { users } from '../../mocks/user.mock';

const budgetService = new BudgetService();

const userModel = new UserModel();
const productModel = new ProductModel();

describe('Budget service test', function() {
  afterEach(function() {
    sinon.restore();
  })
  
  it('Should return an error when an invalid id is passed', async function() {
    sinon.stub(userModel, 'findAll').resolves([]);
    
    try {
      await budgetService.getBudget(validBody, invalidId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('User not found')
    }   
  })

  it('Should return an error when an invalid lits of id is passed', async function() {
    sinon.stub(productModel, 'findAll').resolves([]);
    
    try {
      await budgetService.getBudget(invalidIdBody, validId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid id')
    }   
  })

  it('should return the budget', async function () {
    sinon.stub(productModel, 'findAll').resolves(selectedProducts);
    sinon.stub(userModel, 'findAll').resolves(users.data)
    sinon.stub(budgetService, 'getBudget').resolves(11348.35);

    const budget = await budgetService.getBudget(validBody, validId);

    expect(budget).to.be.equal(11348.35);
  });
});