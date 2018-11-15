import { IAction, IHandlers } from './typings';

/**
 * generate reducer, see https://redux.js.org/recipes/reducingboilerplate#generating-reducers
 * @param {T} initialState
 * @param {IHandlers<any>} handlers
 * @returns {(state: T, action: IAction<any>) => T}
 */
function createReducer<T>(initialState: T, handlers: IHandlers<any>) {
  return function reducer(state = initialState, action: IAction<any>): T {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export default createReducer;
