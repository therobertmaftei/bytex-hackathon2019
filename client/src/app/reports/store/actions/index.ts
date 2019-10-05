import { ActionCreator } from '@shared/libs';
import { ILocationResponse, IReport } from '../../models';

enum ActionsEnum {
  GET_REPORTS = '[reports] GET_REPORTS',
  GEOLOCATION = '[reports] GEOLOCATION'
}

export const Actions = {
  getReports: new ActionCreator<never, ILocationResponse, IReport, any>(ActionsEnum.GET_REPORTS),
  geolocation: new ActionCreator<never, never, Coordinates>(ActionsEnum.GEOLOCATION)
};
