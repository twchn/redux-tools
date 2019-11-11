export interface IActionTypes {
  [propName: string]: string;
}

export interface IAction<T> {
  type: string;
  payload?: T;
}

export type IActionCreator<T> = (payload?: T) => IAction<T>;

export type IActionsTypes<T> = {
  [K in keyof T]: IActionCreator<T[K]>;
};

export interface IActions<T> {
  [propName: string]: IActionCreator<T>;
}

export interface IHandlers<T> {
  [propName: string]: (state: T, action: IAction<any>) => T;
}
