import { IAction, IActionCreator } from './typings';

/**
 * generate a Flux Standard Action creator
 * @param {string} actionType
 * @returns {(payload: any) => IAction}
 */
function createAction(actionType: string): IActionCreator<any> {
  if (typeof actionType !== 'string') {
    throw new Error('Action type must be a string!');
  }
  return function actionCreator(payload: any): IAction<any> {
    return {
      type: actionType,
      payload
    };
  };
}

export default createAction;
