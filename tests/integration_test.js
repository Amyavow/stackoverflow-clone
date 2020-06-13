import chai from 'chai';
import chaiHttp from 'chai-http';
// import User from '../src/models/User';
// import Question from '../src/models/Question';
import app from '../src/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Stackoverflow Clone API', () => {
  describe('User concern test suite', () => {
    it('should add user to the database', (next) => {
      const user = {
        name: 'Testthis',
        email: 'testthis@example.com',
        password: 'hashpassword',
        username: 'testthisusername',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .set('Content-Type', 'Application/json')
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          console.log(res.body);
          expect(res.body.success).to.be.equal(true);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.user.email).to.be.equal('testthis@example.com');
          next();
        });
    });
  });
});
