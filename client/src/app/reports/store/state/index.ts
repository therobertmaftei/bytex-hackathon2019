import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRecord } from '@shared/models';
import { IState } from '../reducer';

export const reportsFeatureSelector = createFeatureSelector('reports');

export const reportsSelector = createSelector(
  reportsFeatureSelector,
  (state: IRecord<IState>) => state.getIn(['reports', 'data'])
);
export const reportsStateLoadingSelector = createSelector(
  reportsFeatureSelector,
  (state: IRecord<IState>) => state.getIn(['reports', 'loading'])
);

export const locationSelector = createSelector(
  reportsFeatureSelector,
  (state: IRecord<IState>) => state.get('location')
);
