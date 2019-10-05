import { ActionCreator } from '@shared/libs';

enum ActionsEnum {
  EXAMPLE = '[template] EXAMPLE',
}

export const Actions = {
  example: new ActionCreator<any, any, any, any>(ActionsEnum.EXAMPLE),
};
