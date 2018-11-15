import { IAction } from './typings';

/**
 * generate a Flux Standard Action
 * @param {string} actionType
 * @returns {(payload: any) => IAction}
 */
function createAction(actionType: string) {
  if (typeof actionType !== 'string') {
    throw new Error('Action type must be a string');
  }
  return (payload: any): IAction<any> => {
    return {
      type: actionType,
      payload
    };
  };
}

export default createAction;
