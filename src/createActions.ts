import { IActions, IActionTypes, IActionsTypes } from './typings';
import createAction from './createAction';

/**
 * generate multiple Flux Standard Action creators
 * @param {IActionTypes} actionTypes
 * @returns {IActions<any>}
 */
function createActions<T extends object = {}>(actionTypes: IActionTypes)
  : ({} extends T ? IActions<any> : IActionsTypes<T>) {
    if (typeof actionTypes !== 'object' || actionTypes == null) {
      throw new Error('Action types must be an object!');
    }
    const types = Object.keys(actionTypes);
    if (types.length === 0) {
      throw new Error('Action types must be not empty!');
    }
    return types.reduce((acc: IActions<any>, type: string) => {
      acc[type.toLowerCase().replace(/([-_]\w)/g, g => g[1].toUpperCase())] = createAction(actionTypes[type]);
      return acc;
    }, {}) as unknown as ({} extends T ? IActions<any> : IActionsTypes<T>);
}

export default createActions;
