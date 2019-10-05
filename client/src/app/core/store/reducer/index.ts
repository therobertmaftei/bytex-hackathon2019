import { fromJS } from 'immutable';

import { IActionCreator } from '@shared/libs';

import { initialState } from './initial-state';
import { reducerActions } from './reducer';

const immutableState = fromJS(initialState);

export { IState } from './initial-state';

export function coreReducer(state = immutableState, action: IActionCreator) {
  if (typeof reducerActions[action.type] === 'function') {
    return reducerActions[action.type](state, action.payload);
  }

  return state;
}
