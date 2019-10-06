import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '@core/constants';
import { SmartCarsComponent, SmartDashboardComponent, SmartHomeComponent, SmartParkingComponent } from '@smart/pages';
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
      },
      {
        path: ROUTES.SMART.children.PARKING.url,
        component: SmartParkingComponent
      },
      {
        path: ROUTES.SMART.children.CAR.url,
        component: SmartCarsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartRoutingModule { }
