import { createActionTypes } from '../src';

describe('test the generating action types function', () => {
  it('should create three specified action types', () => {
    const baseType = 'type';
    const upperCaseBaseType = baseType.toUpperCase();
    const expectedActionTypes = {
      REQUEST: `${upperCaseBaseType}_REQUEST`,
      SUCCESS: `${upperCaseBaseType}_SUCCESS`,
      FAILURE: `${upperCaseBaseType}_FAILURE`
    };

    expect(createActionTypes(baseType)).toEqual(expectedActionTypes);
  });
});
