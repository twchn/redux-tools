import { IActions, IActionTypes } from './typings';
import createAction from './createAction';

/**
 * generate multiple Flux Standard Action creators
 * @param {IActionTypes} actionTypes
 * @returns {IActions<any>}
 */
function createActions(actionTypes: IActionTypes): IActions<any> {
  if (actionTypes == null) {
    throw new Error('Action types must be not empty!');
  }
  const types = Object.keys(actionTypes);
  return types.reduce((acc: IActions<any>, type: string) => {
    acc[type.toLowerCase()] = createAction(actionTypes[type]);
    return acc;
  }, {});
}

export default createActions;
