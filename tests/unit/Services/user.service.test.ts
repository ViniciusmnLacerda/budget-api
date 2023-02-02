import { expect } from 'chai';
import sinon from 'sinon';
import { UserService } from '../../../src/Services';
import { users } from '../../mocks/user.mock';

const userService = new UserService();

describe('User service test', function() {
  afterEach(function() {
    (userService.findAll as sinon.SinonStub).restore();
  })

  it('should return the list of all users', async function () {
    sinon.stub(userService, 'findAll').resolves(users.data);

    const result = await userService.findAll();

    expect(result).to.be.deep.equal(users.data);
  });
});