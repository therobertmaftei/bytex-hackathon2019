import { INavigation } from '@core/models';

export abstract class NAVIGATION {
  public static readonly ITEMS: INavigation[] = [
    {
      label: 'city.ai',
      icon: 'logo',
      iconSize: 'large',
      route: 'DASHBOARD',
      active: false
    },
    {
      icon: 'dashboard',
      iconSize: 'medium',
      route: 'DASHBOARD',
      active: true
    },
    {
      icon: 'news',
      iconSize: 'medium',
      route: 'REPORTS',
      active: false
    },
    {
      icon: 'brain',
      iconSize: 'medium',
      route: 'SMART',
      active: false
    }
  ];
}
