import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRecord } from '@shared/models';
import { IState } from '../reducer';

export const smartFeatureSelector = createFeatureSelector('smart');

// export const reportsSelector = createSelector(
//   smartFeatureSelector,
//   (state: IRecord<IState>) => state.getIn(['reports', 'data'])
// );

// export const locationSelector = createSelector(
//   smartFeatureSelector,
//   (state: IRecord<IState>) => state.get('location')
// );
