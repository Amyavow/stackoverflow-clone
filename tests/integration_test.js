import chai from 'chai';
import chaiHttp from 'chai-http';
import '@babel/polyfill';
import User from '../src/models/User';
// import Question from '../src/models/Question';
import app from '../src/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Stackoverflow Clone API', () => {
  describe('User auth concern test suite', () => {
    after(async () => {
      await User.deleteOne({ name: 'Testthisname' });
    });
    it('should add user to the database', (next) => {
      const user = {
        name: 'Testthisname',
        email: 'testthisemail@example.com',
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
          expect(res.body.success).to.be.equal(true);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.user.email).to.be.equal('testthisemail@example.com');
          next();
        });
    });
    it('should sign in an already registered user', (next) => {
      const user = {
        name: 'Testthisname',
        email: 'testthisemail@example.com',
        password: 'hashpassword',
      };
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(user)
        .set('Content-Type', 'Application/json')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.sucess).to.be.equal(true);
          expect(res.body).to.have.property('token');
          next();
        });
    });
  });
});
