import { createActionTypes } from '../src';

describe('test the generating action types function', () => {
  it('should create three specified action types', () => {
    const baseType = 'type';
    const expectedActionTypes = {
      REQUEST: `${baseType}_REQUEST`,
      SUCCESS: `${baseType}_SUCCESS`,
      FAILURE: `${baseType}_FAILURE`
    };

    expect(createActionTypes(baseType)).toEqual(expectedActionTypes);
  });
});
