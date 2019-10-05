import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NewReportsComponent, ReportListComponent } from './components';
import { ReportRoutingModule } from './report.routing';
import { ReportsComponent } from './reports.component';

@NgModule({
  declarations: [ReportsComponent, ReportListComponent, NewReportsComponent],
  imports: [ReportRoutingModule, CommonModule, SharedModule]
})
export class ReportsModule {

}
