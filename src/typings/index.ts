export interface IActionTypes {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IActions<T> {
  request: (payload: T) => IAction<T>;
  success: (payload: T) => IAction<T>;
  failure: (payload: T) => IAction<T>;
}

export interface IHandlers<T> {
  [propName: string]: (state: T, action: IAction<any>) => T;
}
