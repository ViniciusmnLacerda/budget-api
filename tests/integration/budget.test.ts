import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import App from '../../src/app';
import { BudgetModel } from '../../src/Models';

chai.use(chaiHttp);

const budgetModel = new BudgetModel();
const { app } = new App();

describe('Budget route tests', function () {
  afterEach(function() {
    sinon.restore();
  })

  it('with invalid id should return an error', async function() {
    sinon.stub(budgetModel, 'getBudget').resolves(undefined);

    const { body, status } = await chai.request(app).get('/budget/1500/[1,2,3]');
    expect(body).to.be.deep.equal({ message: 'User not found'});
    expect(status).to.be.equal(422);
  })

  it('with invalid list of id products should return an error', async function() {
    sinon.stub(budgetModel, 'getBudget').resolves(undefined);

    const { body, status } = await chai.request(app).get('/budget/1500/[1,2,3,a]');
    expect(body).to.be.deep.equal({ message: 'Fields must be numbers'});
    expect(status).to.be.equal(422);
  })

  it('with non-existent product id should return an error', async function() {
    sinon.stub(budgetModel, 'getBudget').resolves(undefined);

    const { body, status } = await chai.request(app).get('/budget/1500/[1,2,30000]');
    expect(body).to.be.deep.equal({ message: 'Invalid product id'});
    expect(status).to.be.equal(422);
  })

  it('with valid parameters should return the budget', async function() {
    sinon.stub(budgetModel, 'getBudget').resolves(11348.35);

    const { body, status } = await chai.request(app).get('/budget/1/[1,2,3]');
    expect(body).to.be.deep.equal({ budget: 11348.35});
    expect(status).to.be.equal(200);
  })
})