import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { BudgetController } from '../../../src/Controllers';
import { BudgetService } from '../../../src/Services';

chai.use(sinonChai);

const budgetController = new BudgetController();
const budgetService = new BudgetService();

describe('Budget controller test', function() {
  const req = {} as Request;
  const res = {} as Response; 

  afterEach(function() {
    sinon.restore();
  })

  it('should return the budget with status 200', async function() {
    sinon.stub(budgetService, 'getBudget').resolves(11348.35);
    req.params = { id: '1', ids: "[1,2,3]" }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    
    await budgetController.getBudget(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ budget: 11348.35 });
  });
});