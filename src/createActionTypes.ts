import { IActionTypes } from './typings';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

/**
 * generate action types
 * @param {string} baseTypes
 * @returns {IActionTypes}
 */
function createActionTypes(baseTypes: string): IActionTypes {
  if (typeof baseTypes !== 'string') {
    throw new Error('Base type must be a string!');
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type: string) => {
    acc[type] = `${baseTypes}_${type}`;
    return acc;
  }, {});
}

export default createActionTypes;
