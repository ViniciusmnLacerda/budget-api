import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import App from '../../src/app';
import { UserModel } from '../../src/Models';
import { users } from '../mocks/user.mock';

chai.use(chaiHttp);

const userModel = new UserModel();
const { app } = new App();

describe('User route tests', function () {
  afterEach(function() {
    sinon.restore();
  })

  it('should return the list of all users', async function() {
    sinon.stub(userModel, 'findAll').resolves(users.data);

    const { body, status } = await chai.request(app).get('/users');
    expect(body).to.be.deep.equal(users.data);
    expect(status).to.be.equal(200);
  })
})