import { IActionTypes } from './typings';

const defaultTypes = [
  'REQUEST',
  'SUCCESS',
  'FAILURE'
];

/**
 * generate multiple action types
 * @param {string} baseTypes
 * @param {string[]} types
 * @returns {IActionTypes}
 */
function createActionTypes(baseTypes: string, types: string[] = defaultTypes): IActionTypes {
  if (typeof baseTypes !== 'string') {
    throw new Error('Base type must be a string!');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Types must be an array of strings!');
  }
  return types.reduce((acc: any, type: string) => {
    acc[type] = `${baseTypes}_${type}`;
    return acc;
  }, {});
}

export default createActionTypes;
