import { IActions, IActionTypes } from './typings';
import createAction from './createAction';

/**
 * generate multiple Flux Standard Action creators
 * @param {IActionTypes} actionType
 * @returns {IActions<any>}
 */
function createActions(actionType: IActionTypes): IActions<any> {
  if (actionType == null) {
    throw new Error('Action types must be not empty!');
  }
  return {
    request: createAction(actionType.REQUEST),
    success: createAction(actionType.SUCCESS),
    failure: createAction(actionType.FAILURE)
  };
}

export default createActions;
