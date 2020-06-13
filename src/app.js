import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import { config } from 'dotenv';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import swaggerUI from 'swagger-ui-express';
import routes from './routes/index';
import swaggerDocument from './doc/swagger';

config();
const app = express();

// setup database connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
});

// setup morgan
app.use(morgan('dev'));

// setup body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// JWT setup
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], `${process.env.jwt_secret}`, (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

app.get('/', (req, res) => res.send('Welcome to stackoverflow miniAPI, go through documentation to find your request'));

app.use('/api/v1/', routes);
// set up route for swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found.',
    possibleCauses: [
      'Maybe you got the URL wrong',
      '...',
    ],
  });
});

// catch 404 and forward to error handler

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  err.message = 'Sorry, this path doesn\'t exit';
  next(err);
});

// error handler

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({
    err,
  });
});

app.listen(process.env.PORT, () => {
  debug('dev')(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
