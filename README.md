# [redux-tools](https://github.com/taoweicn/redux-tools)

[![npm (scoped)](https://img.shields.io/npm/v/@twcn/redux-tools.svg)](https://www.npmjs.com/package/@twcn/redux-tools)
[![Build Status](https://travis-ci.com/taoweicn/redux-tools.svg?branch=master)](https://travis-ci.com/taoweicn/redux-tools)

> A collection of tools for quickly generating redux boilerplate code.

## Installation

```bash
$ npm install @twcn/redux-tools --save 
```

or

```bash
$ yarn add @twcn/redux-tools
```

## Usage

```javascript
import { createActionTypes, createActions, createReducer } from '@twcn/redux-tools';

const LOGIN = createActionTypes('LOGIN');

console.log(LOGIN);
// {
//   REQUEST: 'LOGIN_REQUEST',
//   SUCCESS: 'LOGIN_SUCCESS',
//   FAILURE: 'LOGIN_FAILURE'
// }

const login = createActions(LOGIN);

console.log(login);
// {
//   request: (payload) => ({ type: 'LOGIN_REQUEST', payload }),
//   success: (payload) => ({ type: 'LOGIN_SUCCESS', payload }),
//   failure: (payload) => ({ type: 'LOGIN_FAILURE', payload })
// }

const loginReducer = createReducer({ isLogin: false }, {
  [LOGIN.SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
    isLogin: true
  })
});
```

## Documentation

[API](https://taoweicn.github.io/redux-tools/)

## Contribution

You can click [here](https://github.com/taoweicn/redux-tools/pulls) to contribute your fantastic ideas.
