import { config } from 'dotenv';
import { signinPath, signupPath } from './paths/auth';
import {
  signinReq, signinRes, signUpReq, signUpRes,
} from './definitions/auth';
import {
  getAllQuestionsPath,
  askQuestionPath,
  answerQuestionPath,
  upvoteQuestionPath,
  downvoteQuestionPath,
  searchQuestionsPath,
} from './paths/question';
import { getAllQuestionsRes, askQuestionReq, answerQuestionReq } from './definitions/question';
import {
  badRequest, notAuthorized, serverError,
} from './definitions/errorResponse';
import { success, created } from './definitions/successResponse';
import searchUsersPath from './paths/user';

config();

const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'StackOverflow Clone',
    description: 'API Documentation for StackOverflow API',
    header: 'none',
    contact: {},
  },
  host: process.env.API_URL,
  basePath: '/api/v1',
  produces: ['application/json'],
  consumes: ['application/json'],
  schemes: ['https', 'http'],
  securityDefinitions: {
    JWTToken: {
      description: 'All protected routes must be accessed with a token. The JWT Token is generated by the API on sign in',
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },

  tags: [
    {
      name: 'auth',
      description: 'sign in and sign up routes',
    },
    {
      name: 'questions',
      description: 'routes for viewing, asking and answering questions',
    },
    {
      name: 'user',
      description: 'route to search for user',
    },
  ],

  paths: {
    '/auth/signup': signupPath,
    '/auth/signin': signinPath,
    '/questions/question': getAllQuestionsPath,
    '/questions': askQuestionPath,
    'questions/answers/{questionId}': answerQuestionPath,
    'questions/downvote/{questionId}': downvoteQuestionPath,
    'questions/upvote/{questionId}': upvoteQuestionPath,
    '/questions/search': searchQuestionsPath,
    '/users/search': searchUsersPath,
  },

  definitions: {
    signinReq,
    signinRes,
    signUpReq,
    signUpRes,
    getAllQuestionsRes,
    askQuestionReq,
    answerQuestionReq,
    badRequest,
    notAuthorized,
    serverError,
    success, // 200
    created, // 201

  },

};
export default swaggerDocument;
