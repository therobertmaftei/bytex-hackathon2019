import { ActionCreator } from '@shared/libs';

import { IReport } from '@reports/models';

enum ActionsEnum {
  GET_REPORTS = '[reports] GET_REPORTS',
  ADD_REPORT = '[reports] ADD_REPORT',
  CLEAR_REPORT = '[reports] CLEAR_REPORT',
  GEOLOCATION = '[reports] GEOLOCATION'
}

export const Actions = {
  getReports: new ActionCreator<never, any, IReport, any>(ActionsEnum.GET_REPORTS),
  addReport: new ActionCreator<never, any, any, any>(ActionsEnum.ADD_REPORT),
  clearReport: new ActionCreator<never, any, any, any>(ActionsEnum.CLEAR_REPORT),
  geolocation: new ActionCreator<never, never, Coordinates>(ActionsEnum.GEOLOCATION)
};
