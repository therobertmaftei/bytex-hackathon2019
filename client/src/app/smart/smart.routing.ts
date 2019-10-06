import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '@core/constants';
import { SmartDashboardComponent, SmartHomeComponent } from '@smart/pages';
import { SmartComponent } from '@smart/smart.component';

const routes: Routes = [
  {
    path: '',
    component: SmartComponent,
    children: [
      {
        path: ROUTES.SMART.children.DASHBOARD.url,
        component: SmartDashboardComponent
      },
      {
        path: ROUTES.SMART.children.HOME.url,
        component: SmartHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartRoutingModule { }
