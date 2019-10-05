import { ActionCreator } from '@shared/libs';

enum ActionsEnum {
  APP_READY = '[core] APP_READY',
}

export const Actions = {
  appReady: new ActionCreator<any, any, any, any>(ActionsEnum.APP_READY),
};
