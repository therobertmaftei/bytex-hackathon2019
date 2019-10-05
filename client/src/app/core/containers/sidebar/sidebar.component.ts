import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { INavigation } from '@core/models';
import { RoutePath } from '@shared/libs';
import { HelpComponent } from './components';

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public navigationItems: INavigation[] = [
    {
      label: 'city.ai',
      icon: 'logo',
      iconSize: 'large',
      route: RoutePath.buildRootPath('DASHBOARD'),
      active: false
    },
    {
      icon: 'dashboard',
      iconSize: 'medium',
      route: RoutePath.buildRootPath('DASHBOARD'),
      active: true
    },
    {
      icon: 'news',
      iconSize: 'medium',
      route: RoutePath.buildRootPath('REPORTS'),
      active: false
    },
    {
      icon: 'brain',
      iconSize: 'medium',
      route: RoutePath.buildRootPath('SMART'),
      active: false
    }
  ];

  constructor(private dialog: MatDialog) { }

  public switchPage(navigationItem: INavigation): void {
    this.navigationItems.forEach((item: INavigation) => item.active = false);
    if (navigationItem.icon === 'logo') {
      this.navigationItems[1].active = true;
    } else {
      navigationItem.active = true;
    }
  }

  public help(): void {
    this.dialog.open(HelpComponent, {
      autoFocus: false
    });
  }
}
