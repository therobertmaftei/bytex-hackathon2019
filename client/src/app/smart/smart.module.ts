import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { reportsEffects, reportsReducer } from '@reports/store';
import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';
import { SmartCarsComponent, SmartDashboardComponent, SmartHomeComponent, SmartParkingComponent } from '@smart/pages';
import { SmartComponent } from '@smart/smart.component';
import { SmartRoutingModule } from '@smart/smart.routing';

@NgModule({
  declarations: [
    SmartComponent,
    SmartDashboardComponent,
    SmartHomeComponent,
    SmartParkingComponent,
    SmartCarsComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature(reportsEffects),
    SmartRoutingModule,
    SharedModule,
    StoreModule.forFeature('reports', reportsReducer),
    TranslateModule.forChild(translateConfig)
  ]
})
export class SmartModule { }
