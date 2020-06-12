const searchUsersPath = {
  get: {
    tags: ['user'],
    summary: 'search for a question',
    description: 'Allows to search for a question using question title',
    parameters: [
      {
        name: 'name',
        in: 'query',
        description: 'closest matching names to to query name value',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      200: {
        description: 'Question retrieved',
        schema: {
          $ref: '#definitions/signUpRes',
        },
      },
      400: {
        description: 'Bad Request',
        schema: {
          $ref: '#definitions/badRequest',
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

export default searchUsersPath;
