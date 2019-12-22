import { IAction, IActionCreator } from './typings';

/**
 * Generate a Flux Standard Action creator
 * @param {string} actionType
 * @returns {IActionCreator<T>}
 */
function createAction<T>(actionType: string): IActionCreator<T> {
  if (typeof actionType !== 'string' || actionType === '') {
    throw new Error('Action type must be a non-empty string!');
  }
  return function actionCreator(payload?: T): IAction<T> {
    const action: IAction<T> = { type: actionType };
    if (payload !== undefined) {
      action.payload = payload;
    }
    return action;
  };
}

export default createAction;
