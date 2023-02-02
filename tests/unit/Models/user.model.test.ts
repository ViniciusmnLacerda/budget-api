import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { UserModel } from '../../../src/Models';
import { users } from '../../mocks/user.mock';

chai.use(sinonChai);

describe('Users model test', function() {

  afterEach(function() {
    sinon.restore();
  })

  it('should return the list of all users', async function() {
    sinon.stub(axios, 'get').resolves(users);
    const data = await new UserModel().findAll();

    expect(data).to.be.deep.equal(users.data);
    expect(axios.get).to.have.been.calledWith('https://mockend.com/juunegreiros/BE-test-api/users');
  })
});