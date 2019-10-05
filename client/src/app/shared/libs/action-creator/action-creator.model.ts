import { Action } from '@ngrx/store';

export interface IActionCreator<T = never> extends Action {
  payload?: T;
}
