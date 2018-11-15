import { IActions, IActionTypes } from './typings';

/**
 * generate multiple Flux Standard Actions
 * @param {IActionTypes} actionType
 * @returns {IActions<any>}
 */
function createActions(actionType: IActionTypes): IActions<any> {
  return {
    request: payload => ({ type: actionType.REQUEST, payload }),
    success: payload => ({ type: actionType.SUCCESS, payload }),
    failure: payload => ({ type: actionType.FAILURE, payload })
  };
}

export default createActions;
