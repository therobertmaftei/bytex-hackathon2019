import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { NewReportsComponent, ReportListComponent } from './components';
import { ReportRoutingModule } from './report.routing';
import { ReportsComponent } from './reports.component';
import { reportsEffects, reportsReducer } from './store';

@NgModule({
  declarations: [ReportsComponent, ReportListComponent, NewReportsComponent],
    imports: [
      ReportRoutingModule,
      CommonModule,
      SharedModule,
      EffectsModule.forFeature(reportsEffects),
      StoreModule.forFeature('reports', reportsReducer)
    ]
})
export class ReportsModule {}
