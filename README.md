# redux-tools

> A collection of tools for quickly generating redux boilerplate code.

## Installation

```bash
$ npm install @tw/redux-tools --save 
```

or

```bash
$ yarn add @tw/redux-tools
```

## Usage

```javascript
import { createActionTypes, createActions, createReducer } from '@tw/redux-tools';

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

[API]()

## Contribution

You can click [here](https://github.com/redux-tools/pulls) to contribute your fantastic idea.
