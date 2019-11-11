import { IActionsTypes } from './../src/typings/index';
import { createActionTypes, createActions } from '../src';
import { IActionCreator } from '../src/typings';

describe('test the generating actions function', () => {
  it('should return three default actions', () => {
    const actionTypes = createActionTypes('TYPE');
    const generatedActions = createActions(actionTypes);
    const payload = { data: 1 };
    const expectedActions = {
      request: { type: actionTypes.REQUEST, payload },
      success: { type: actionTypes.SUCCESS, payload },
      failure: { type: actionTypes.FAILURE, payload }
    };

    expect(generatedActions.request(payload)).toEqual(expectedActions.request);
    expect(generatedActions.success(payload)).toEqual(expectedActions.success);
    expect(generatedActions.failure(payload)).toEqual(expectedActions.failure);
  });

  it('should return specified actions', () => {
    const types = ['REQUEST', 'REQUEST_SUCCESS', 'REQUEST-FAILURE'];
    const actionTypes = createActionTypes('TYPE', types);
    const generatedActions = createActions(actionTypes);
    const payload = { data: 2 };
    const expectedActions = {
      request: { type: actionTypes.REQUEST, payload },
      requestSuccess: { type: actionTypes.REQUEST_SUCCESS, payload },
      requestFailure: { type: actionTypes['REQUEST-FAILURE'], payload },
    };

    expect(generatedActions.request(payload)).toEqual(expectedActions.request);
    expect(generatedActions.requestSuccess(payload)).toEqual(expectedActions.requestSuccess);
  });

  it('should return specified actions when use specified types on actions', () => {
    const types = ['REQUEST', 'REQUEST_SUCCESS', 'REQUEST-FAILURE'];
    const actionTypes = createActionTypes('TYPE', types);
    const generatedActions = createActions<{
      'request': IActionCreator<{ data: number }>,
      'requestSuccess': IActionCreator<{ data: number }>,
      'requestFailure': IActionCreator<{ data: number }>
    }>(actionTypes);
    const payload = { data: 2 };
    const expectedActions = {
      request: { type: actionTypes.REQUEST, payload },
      requestSuccess: { type: actionTypes.REQUEST_SUCCESS, payload },
      requestFailure: { type: actionTypes['REQUEST-FAILURE'], payload },
    };

    expect(generatedActions.request(payload)).toEqual(expectedActions.request);
    expect(generatedActions.requestSuccess(payload)).toEqual(expectedActions.requestSuccess);
  });

  it('should return specified actions when use shorthand way to specify types on actions', () => {
    const types = ['REQUEST', 'REQUEST_SUCCESS', 'REQUEST-FAILURE'];
    const actionTypes = createActionTypes('TYPE', types);
    const generatedActions = createActions<IActionsTypes<{
      'request': { data: number },
      'requestSuccess': { data: number },
      'requestFailure': { data: number }
    }>>(actionTypes);
    const payload = { data: 2 };
    const expectedActions = {
      request: { type: actionTypes.REQUEST, payload },
      requestSuccess: { type: actionTypes.REQUEST_SUCCESS, payload },
      requestFailure: { type: actionTypes['REQUEST-FAILURE'], payload },
    };

    expect(generatedActions.request(payload)).toEqual(expectedActions.request);
    expect(generatedActions.requestSuccess(payload)).toEqual(expectedActions.requestSuccess);
  });

  it('should throw a error when action types is not an object', () => {
    expect(createActions).toThrow('Action types must be an object!');
  });

  it('should throw a error when action types is an empty object', () => {
    expect(() => {
      createActions({});
    }).toThrow('Action types must be not empty!');
  });
});
