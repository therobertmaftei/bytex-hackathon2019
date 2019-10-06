import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportListComponent } from '@reports/pages';
import { ReportsComponent } from '@reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: '',
        component: ReportListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
