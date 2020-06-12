const badRequest = {
  type: 'object',
  required: ['status', 'error'],
  properties: {
    status: {
      type: 'string',
      example: 'error',
    },
    error: {
      type: 'string',
      example: 'This email does not exist',
    },
  },
};

const notAuthorized = {
  type: 'object',
  required: ['status', 'error'],
  properties: {
    status: {
      type: 'string',
      example: 'error',
    },
    error: {
      type: 'string',
      example: 'This endpoint is protected. Attach an authentication token to request header',
    },
  },
};

const serverError = {
  type: 'object',
  required: ['status', 'error'],
  properties: {
    status: {
      type: 'string',
      example: 'error',
    },
    error: {
      type: 'string',
      example: 'A server error occured',
    },
  },
};

export {
  badRequest,
  notAuthorized,
  serverError,
};
