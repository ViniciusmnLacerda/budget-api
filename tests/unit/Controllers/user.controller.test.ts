import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { UserController } from '../../../src/Controllers';
import { UserService } from '../../../src/Services';
import { users } from '../../mocks/user.mock';

chai.use(sinonChai);

const userController = new UserController();
const userService = new UserService();

describe('User controller test', function() {
  const req = {} as Request;
  const res = {} as Response; 

  afterEach(function() {
    sinon.restore();
  })

  it('should return the list of all users with status 200', async function() {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.stub(userService, 'findAll').resolves(users.data);
    
    await userController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(users.data);
  });
});