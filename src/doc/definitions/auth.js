const signinReq = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      format: 'string',
      example: 'amy',
    },
    email: {
      type: 'string',
      format: 'email',
      example: 'example@example.com',
    },
    password: {
      type: 'string',
      format: 'password',
      example: 'amy235',
    },
  },
};

const signinRes = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      example: 'success',
    },
    payload: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          example: 'very_long_encoded_string',
        },
      },
    },
  },
};

const signUpReq = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      format: 'string',
      example: 'Miller',
    },
    email: {
      type: 'string',
      format: 'email',
      example: 'example@example.com',
    },
    password: {
      type: 'string',
      format: 'password',
      example: 'amy235',
    },
    username: {
      type: 'string',
      format: 'string',
      example: 'Roger',
    },
  },
};

const signUpRes = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      example: 'success',
    },
    data: {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            profilepic: {
              type: 'string',
              example: 'https://via.placeholder.com/468x60?text=Default+Image',
            },
            _id: {
              type: 'integer',
              example: 348484848,
            },
            name: {
              type: 'string',
              example: 'Roger',
            },
            email: {
              type: 'string',
              example: 'you@you.com',
            },
            username: {
              type: 'string',
              example: 'AmyWineHouse',
            },
            date: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
  },
};

export {
  signinRes,
  signinReq,
  signUpReq,
  signUpRes,
};
