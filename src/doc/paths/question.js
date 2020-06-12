const getAllQuestionsPath = {
  get: {
    tags: ['questions'],
    summary: 'Gets all questions',
    description: 'Multiple questions can be provided',
    produces: ['application/json'],
    responses: {
      200: {
        description: 'User successfully logged in',
        schema: {
          $ref: '#definitions/getAllQuestionsRes',
        },
      },
      400: {
        description: 'incorrect sign in details',
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

const askQuestionPath = {
  post: {
    tags: ['questions'],
    security: [
      {
        JWTToken: [],
      },
    ],

    summary: 'ask a question as a user already signed in',
    description: 'Allows registered users to sign in',
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'request object',
        required: true,
        schema: {
          $ref: '#definitions/askQuestionReq',
        },
      },
    ],
    responses: {
      201: {
        description: 'Question successfully created',
        schema: {
          $ref: '#definitions/created',
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

const answerQuestionPath = {
  post: {
    tags: ['questions'],
    security: [
      {
        JWTToken: [],
      },
    ],

    summary: 'answer a question as a user already signed in',
    description: 'Allows signed in users answer a question',
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'request object',
        required: true,
        schema: {
          $ref: '#definitions/answerQuestionReq',
        },
      },
      {
        name: 'questionId',
        in: 'path',
        description: 'Id of question to answer',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      201: {
        description: 'Answer successfully created',
        schema: {
          $ref: '#definitions/getAllQuestionsRes',
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

const upvoteQuestionPath = {
  post: {
    tags: ['questions'],
    security: [
      {
        JWTToken: [],
      },
    ],

    summary: 'upvote a question as a user already signed in',
    description: 'Allows signed in users upvote a question',
    parameters: [
      {
        name: 'questionId',
        in: 'path',
        description: 'Id of question to answer',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      201: {
        description: 'Question upvoted',
        schema: {
          $ref: '#definitions/voteQuestionRes',
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
const downvoteQuestionPath = {
  post: {
    tags: ['questions'],
    security: [
      {
        JWTToken: [],
      },
    ],

    summary: 'downvote a question as a user already signed in',
    description: 'Allows signed in users downvote a question',
    parameters: [
      {
        name: 'questionId',
        in: 'path',
        description: 'Id of question to answer',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      201: {
        description: 'Question downvoted',
        schema: {
          $ref: '#definitions/voteQuestionRes',
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

const searchQuestionsPath = {
  get: {
    tags: ['questions'],
    summary: 'search for a question',
    description: 'Allows to search for a question using question title',
    parameters: [
      {
        name: 'title',
        in: 'query',
        description: 'closest matching words to question',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      200: {
        description: 'Question retrieved',
        schema: {
          $ref: '#definitions/getAllQuestionsRes',
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
export {
  getAllQuestionsPath,
  askQuestionPath,
  answerQuestionPath,
  upvoteQuestionPath,
  downvoteQuestionPath,
  searchQuestionsPath,
};
