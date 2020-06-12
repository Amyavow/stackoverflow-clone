const success = {
  type: 'object',
  required: ['status', 'data'],
  properties: {
    status: {
      type: 'string',
      example: 'success',
    },
    data: {
      type: 'object',
      example: {
        message: 'Operation successful',
        payload: {
          type: 'object',
          items: {
            type: 'string',
            example: 'data',
          },
        },
      },
    },
  },
};

const created = {
  type: 'object',
  required: ['status', 'data'],
  properties: {
    status: {
      type: 'string',
      example: 'success',
    },
    data: {
      type: 'string',
      example: {
        message: 'Resource created',
        payload: {
          type: 'object',
          items: {
            type: 'string',
            example: 'data',
          },
        },
      },
    },
  },
};

export {
  success,
  created,
};
