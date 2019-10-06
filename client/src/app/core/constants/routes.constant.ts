import { IRoute } from '@core/models';

export abstract class ROUTES {
  public static LANDING: IRoute = {
    url: 'landing'
  };

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

  public static SMART: IRoute = {
    url: 'smart',
    children: {
      HOME: {
        url: 'home',
        children: {
          id: {
            url: ':id'
          }
        }
      },
      CAR: {
        url: 'car',
        children: {
          id: {
            url: ':id'
          }
        }
      }
    }
  };
}
