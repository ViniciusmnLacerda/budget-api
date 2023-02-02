import { expect } from 'chai';
import sinon from 'sinon';
import { BudgetModel } from '../../../src/Models';
import { selectedProducts } from '../../mocks/budget.mock';
import { user } from '../../mocks/user.mock';

const budgetModel = new BudgetModel();

describe('Products model test', function() {
  afterEach(function() {
    (budgetModel.getBudget as sinon.SinonStub).restore();
  })

  it('should return the budget', async function () {
    sinon.stub(budgetModel, 'getBudget').resolves(11348.35);

    const budget = await budgetModel.getBudget(selectedProducts, user);

    expect(budget).to.be.equal(11348.35);
  });
});