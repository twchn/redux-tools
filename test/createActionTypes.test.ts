import { createActionTypes } from '../src';

describe('test the generating action types function', () => {
  it('should return three default action types', () => {
    const baseType = 'type';
    const expectedActionTypes = {
      REQUEST: `${baseType}_REQUEST`,
      SUCCESS: `${baseType}_SUCCESS`,
      FAILURE: `${baseType}_FAILURE`
    };

    expect(createActionTypes(baseType)).toEqual(expectedActionTypes);
  });

  it('should return specified action types', () => {
    const baseType = 'TYPE';
    const types = ['SUCCESS', 'FAILURE'];
    const expectedActionTypes = {
      [types[0]]: `${baseType}_${types[0]}`,
      [types[1]]: `${baseType}_${types[1]}`
    };

    expect(createActionTypes(baseType, types)).toEqual(expectedActionTypes);
  });

  it('should throw a error when base type is not a string', () => {
    expect(createActionTypes).toThrow('Base type must be a non-empty string!');
  });

  it('should throw a error when types is not an array of strings', () => {
    expect(() => {
      createActionTypes('TYPE', []);
    }).toThrow('Types must be an array of strings!');
  });
});
