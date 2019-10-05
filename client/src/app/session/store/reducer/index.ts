import { IActionCreator } from '@shared/libs';
import { fromJS } from 'immutable';

import { initialState } from './initial-state';
import { reducerActions } from './reducer';

export { IState } from './initial-state';

const immutableState = fromJS(initialState);

export function sessionReducer(state = immutableState, action: IActionCreator) {
  if (typeof reducerActions[action.type] === 'function') {
    return reducerActions[action.type](state, action.payload);
  }

  return state;
}
