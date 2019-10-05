import { IRecord, IReducer } from '@shared/models';
import { fromJS } from 'immutable';

import { ILocationResponse, IReport } from '../../models/report.model';
import { Actions } from '../actions';
import { IState } from './initial-state';

export const reducerActions: IReducer<IRecord<IState>> = {
  [Actions.getReports.loading()]: (state: IRecord<IState>) => state
    .setIn(['reports', 'loading'], true)
    .setIn(['reports', 'data'], null),
  [Actions.getReports.complete()]: (state: IRecord<IState>, payload: IReport) => state
    .setIn(['reports', 'loading'], false)
    .setIn(['reports', 'data'], fromJS(payload)),

  [Actions.geolocation.complete()]: (state: IRecord<IState>, payload: ILocationResponse) => state
    .set('location', fromJS(payload))
};
