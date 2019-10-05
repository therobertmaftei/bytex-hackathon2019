import { fromJS } from 'immutable';

import { IActionCreator } from '@shared/libs';

import { initialState } from './initial-state';
import { reducerActions } from './reducer';

const immutableState = fromJS(initialState);

export function templateReducer(state = immutableState, action: IActionCreator) {
  if (typeof reducerActions[action.type] === 'function') {
    return reducerActions[action.type](state, action.payload);
  }

  return state;
}
