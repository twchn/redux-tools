import { IAction, IActionCreator } from './typings';

/**
 * generate a Flux Standard Action creator
 * @param {string} actionType
 * @returns {IActionCreator<any>}
 */
function createAction<T>(actionType: string): IActionCreator<T> {
  if (typeof actionType !== 'string' || actionType === '') {
    throw new Error('Action type must be a string!');
  }
  return function actionCreator(payload?: T): IAction<T> {
    let action = { type: actionType };
    if (payload !== undefined) action.payload = payload;
    return payload;
  };
}

export default createAction;
