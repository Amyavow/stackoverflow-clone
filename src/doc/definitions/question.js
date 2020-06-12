const getAllQuestionsRes = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      example: 'success',
    },

    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5ehehehhekdkdk737738',
          },
          title: {
            type: 'string',
            example: 'How do I write this in JavaScript',
          },
          textbody: {
            type: 'string',
            example: 'Insert code here',
          },
          user: {
            type: 'string',
            example: 'userId here',
          },
          name: {
            type: 'string',
            example: 'Lucy',
          },
          upvotes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: 'question id',
                },
                user: {
                  type: 'string',
                  example: 'user id',
                },
              },
            },
          },
          downvotes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: 'question id',
                },
                user: {
                  type: 'string',
                  example: 'user id',
                },
              },
            },
          },
          answers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: 'answer id',
                },
                user: {
                  type: 'string',
                  example: 'user id',
                },
                name: {
                  type: 'string',
                  example: 'Lucifer',
                },
                text: {
                  type: 'string',
                  example: 'question answered',
                },
                date: {
                  type: 'string',
                  format: 'date-time',
                },
              },
            },
          },
          date: {
            type: 'string',
            format: 'date-time',
          },

        },
      },

    },
  },
};

const askQuestionReq = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      format: 'string',
      example: 'Question Title',
    },
    textbody: {
      type: 'string',
      format: 'string',
      example: 'code or question example',
    },
    name: {
      type: 'string',
      format: 'string',
      example: 'Name of User',
    },
  },
};

const answerQuestionReq = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      format: 'string',
      example: 'Name of User',
    },
    text: {
      type: 'string',
      format: 'string',
      example: 'answer to question',
    },
  },
};

const voteQuestionRes = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      example: 'success',
    },

    data: {
      type: 'object',
      properties: {
        question: {
          type: 'Object',
          properties: {
            _id: {
              type: 'string',
              example: '5ehehehhekdkdk737738',
            },
            title: {
              type: 'string',
              example: 'How do I write this in JavaScript',
            },
            textbody: {
              type: 'string',
              example: 'Insert code here',
            },
            user: {
              type: 'string',
              example: 'userId here',
            },
            name: {
              type: 'string',
              example: 'Lucy',
            },
            upvotes: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: 'question id',
                  },
                  user: {
                    type: 'string',
                    example: 'user id',
                  },
                },
              },
            },
            downvotes: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: 'question id',
                  },
                  user: {
                    type: 'string',
                    example: 'user id',
                  },
                },
              },
            },
            answers: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: 'answer id',
                  },
                  user: {
                    type: 'string',
                    example: 'user id',
                  },
                  name: {
                    type: 'string',
                    example: 'Lucifer',
                  },
                  text: {
                    type: 'string',
                    example: 'question answered',
                  },
                  date: {
                    type: 'string',
                    format: 'date-time',
                  },
                },
              },
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
  getAllQuestionsRes,
  askQuestionReq,
  answerQuestionReq,
  voteQuestionRes,
};
