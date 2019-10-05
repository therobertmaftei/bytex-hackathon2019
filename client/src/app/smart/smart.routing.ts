import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartComponent } from '@smart/smart.component';

const routes: Routes = [
  {
    path: '',
    component: SmartComponent,
    children: [
      // {
      //   path: '',
      //   component: ReportListComponent
      // },
      // {
      //   path: 'new',
      //   component: NewReportsComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartRoutingModule { }
