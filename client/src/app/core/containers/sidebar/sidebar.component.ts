import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { NAVIGATION } from '@core/constants';
import { INavigation } from '@core/models';
import { BaseComponent } from '@shared/containers';
import { RoutePath } from '@shared/libs';
import { HelpComponent } from './components';

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends BaseComponent implements OnInit {
  public navigationItems: INavigation[] = NAVIGATION.ITEMS;
  private activePath: string = location.pathname;

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions$.push(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this.activePath = event.url)
    );
  }

  public isMenuItemActive(pathName: string): boolean {
    const path: string = RoutePath.buildRootPath(pathName);
    if (path === '/') {
      return this.activePath === path;
    }

    return this.activePath.indexOf(path) === 0;
  }

  public help(): void {
    this.dialog.open(HelpComponent, {
      autoFocus: false
    });
  }
}
