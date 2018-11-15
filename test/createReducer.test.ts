import { createAction, createReducer } from '../src';

describe('test the generating reducer function', () => {
  it('should return the initial state', () => {
    const initialState = { data: 1 };
    const payload = {};
    const handlers = {};

    const action = createAction('type')(payload);
    const reducer = createReducer(initialState, handlers);

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should handle CHANGE_DATA', () => {
    const initialState = { data: 1 };
    const payload = { data: 2 };
    const handlers = {
      // tslint:disable-next-line
      CHANGE_DATA: (state: any, action: any) => {
        return {
          ...state,
          ...action.payload
        };
      }
    };

    const action = createAction('CHANGE_DATA')(payload);
    const reducer = createReducer(initialState, handlers);

    expect(reducer(initialState, action)).toEqual(payload);
  });
});
