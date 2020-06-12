/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import debug from 'debug';
import User from '../models/User';

export default class AuthController {
  static signup(req, res) {
    try {
      User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
          return res.status(400).json({
            emailError: 'Email is already registered on our system',
          });
        }
      });
      const newUser = new User(req.body);
      newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
      newUser.save((err, user) => {
        if (err) {
          return res.status(400).send({
            message: err,
          });
        }
        // eslint-disable-next-line no-param-reassign
        user.hashPassword = undefined;
        return res.status(201).json({
          success: true,
          data: {
            user,
          },
        });
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static signin(req, res) {
    try {
      User.findOne({
        email: req.body.email,
      }, (err, user) => {
        if (err) throw err;
        if (!user) {
          res.status(401).json({ message: 'Authentication failed. No user found!' });
        } else if (user) {
          if (!user.comparePassword(req.body.password, user.hashPassword)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password!' });
          } else {
            return res.json({
              token: jwt.sign({
                id: user.id, name: user.name, _id: user.id, email: user.email,
              }, `${process.env.jwt_secret}`),
              sucess: true,
            });
          }
        }
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static signinRequired(req, res, next) {
    try {
      if (req.user) {
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
      }
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
