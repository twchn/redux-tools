import { createAction } from '../src';

describe('test the generating action function', () => {
  it('should create a Flux Standard Action', () => {
    const actionType = 'REQUEST';
    const payload = { data: 'data' };

    const expectedAction = {
      type: actionType,
      payload
    };
    expect(createAction(actionType)(payload)).toEqual(expectedAction);
  });

  it('should throw a error when action type is not a string', () => {
    expect(createAction).toThrow('Action type must be a non-empty string!');
  });

  it('should throw a error when action type is an empty string', () => {
    expect(() => {
      createAction('')({});
    }).toThrow('Action type must be a non-empty string!');
  });
});
