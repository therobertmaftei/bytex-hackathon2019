import { IRoute } from '@core/models';

export abstract class ROUTES {
  public static LOGIN: IRoute = {
    url: 'login'
  };

  public static LOGOUT: IRoute = {
    url: 'logout'
  };

  public static DASHBOARD: IRoute = {
    url: ''
  };

  public static REPORTS: IRoute = {
    url: 'reports',
    children: {
      ADD: {
        url: 'add'
      }
    }
  };
}
