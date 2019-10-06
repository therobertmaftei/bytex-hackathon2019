import { IRequest } from '@shared/models';
import { fromJS, List } from 'immutable';
import { IReport } from '../../models/report.model';

export interface IState {
  report: IRequest<IReport>;
  reports: IRequest<List<IReport>>;
  location: Partial<Coordinates>;
}

export const initialState: IState = {
  reports: fromJS({
    message: [],
    data: null,
    success: false,
    loading: false
  }),
  report: fromJS({
    message: [],
    data: null,
    success: false,
    loading: false
  }),
  location: null
};
