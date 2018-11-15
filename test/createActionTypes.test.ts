import { createActionTypes } from '../src';

describe('test the generating action types function', () => {
  it('should create three default action types', () => {
    const baseType = 'type';
    const expectedActionTypes = {
      REQUEST: `${baseType}_REQUEST`,
      SUCCESS: `${baseType}_SUCCESS`,
      FAILURE: `${baseType}_FAILURE`
    };

    expect(createActionTypes(baseType)).toEqual(expectedActionTypes);
  });

  it('should create specified action types', () => {
    const baseType = 'type';
    const types = ['SUCCESS', 'FAILURE'];
    const expectedActionTypes = {
      [types[0]]: `${baseType}_${types[0]}`,
      [types[1]]: `${baseType}_${types[1]}`
    };

    expect(createActionTypes(baseType, types)).toEqual(expectedActionTypes);
  });
});
