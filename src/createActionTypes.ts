import { IActionTypes } from './typings';

const defaultTypes = [
  'REQUEST',
  'SUCCESS',
  'FAILURE'
];

/**
 * Generate multiple action types
 * @param {string} baseType
 * @param {string[]} types
 * @returns {IActionTypes}
 */
function createActionTypes(baseType: string, types: string[] = defaultTypes): IActionTypes {
  if (typeof baseType !== 'string' || baseType === '') {
    throw new Error('Base type must be a non-empty string!');
  }
  if (!Array.isArray(types) || types.length === 0 || !types.every(type => typeof type === 'string')) {
    throw new Error('Types must be an array of strings!');
  }
  return types.reduce((acc: IActionTypes, type: string) => {
    acc[type] = `${baseType}_${type}`;
    return acc;
  }, {});
}

export default createActionTypes;
