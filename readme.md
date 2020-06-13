# Simple StackOverflow clone

[![Build Status](https://travis-ci.org/Amyavow/stackoverflow-clone.svg?branch=develop)](https://travis-ci.org/Amyavow/stackoverflow-clone)

> A simple implementation of Stackoverflow API with Node/Express.

## Features

* User signup
* User sign in (using JWT)
* Ask Question
* View Questions
* Upvote or downvote question
* Answer Question
* Search (Questions, Answers and Users)

## Stack

* NodeJs with express
* Authentication with jsonwebtoken
* MongoDB database
* Documentation with Swagger

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
git clone https://github.com/Amyavow/stackoverflow-clone.git
cd stackoverflow-clone
npm install
npm run start-dev # prints Listening on port $portnumber
```

### Building

```shell
npm build # build project for prod
npm start # start project in prod mode
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

The project enforces eslint airbnb code style.

## Routes

### auth

| Route | Method | Access | Description |
| ----------- | ----------- | ----------- | ----------- |
| /auth/signup | POST | Public |sign up a new user |
| /auth/signin | POST | Public | sign in as a user |

### questions

| Route | Method | Access | Description |
| ----------- | ----------- | ----------- | ----------- |
| /questions/question |GET| Public | Gets all questions |
| /questions | POST | Private | ask a question as a user already signed in |
| questions/answers/{questionId} | POST | Private | answer a question as a user already signed in |
|  questions/downvote/{questionId} | POST | Private | downvote a question as a user already signed in |
|  questions/upvote/{questionId} | POST | Private | upvote a question as a user already signed in |
| /questions/search | POST | Public | search for a question |

### user

| Route | Method | Access | Description |
| ----------- | ----------- | ----------- | ----------- |
| /userss/search | POST | Public | search for a user with name |

## Links

* [Swagger Documentation on local](http://host:port/api-docs)
* [Repository](https://github.com/Amyavow/stackoverflow-clone)
* [Airbnb Lint guide](https://github.com/airbnb/javascript)
