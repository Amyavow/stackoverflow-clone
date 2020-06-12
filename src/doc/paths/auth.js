const signinPath = {
  post: {
    tags: ['auth'],
    summary: 'sign in as a user',
    description: 'Allows registered users to sign in',
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'request object',
        required: true,
        schema: {
          $ref: '#definitions/signinReq',
        },
      },
    ],
    responses: {
      200: {
        description: 'User successfully logged in',
        schema: {
          $ref: '#definitions/success',
        },
      },
      400: {
        description: 'incorrect sign in details',
        schema: {
          $ref: '#definitions/notAuthorized',
        },
      },
      500: {
        description: 'server error',
        schema: {
          $ref: '#definitions/serverError',
        },
      },
    },
  },
};

const signupPath = {
  post: {
    tags: ['auth'],
    summary: 'sign up a new user',
    description: 'creates new user',
    consumes: ['application/json'],
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'request object',
        required: true,
        schema: {
          $ref: '#definitions/signUpReq',
        },
      },
    ],
    responses: {
      201: {
        description: 'User successfully created',
        schema: {
          $ref: '#definitions/created',
        },
      },
      400: {
        description: 'invalid details',
        schema: {
          $ref: '#definitions/notAuthorized',
        },
      },
      500: {
        description: 'server error',
        schema: {
          $ref: '#definitions/serverError',
        },
      },
    },
  },
};

export {
  signinPath,
  signupPath,
};
