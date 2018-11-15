import { createActionTypes, createActions } from '../src';

describe('test the generating actions function', () => {
  it('should return three specified actions', () => {
    const actionTypes = createActionTypes('actionType');
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
});
