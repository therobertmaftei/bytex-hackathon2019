import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { SmartComponent } from '@smart/smart.component';
import { SmartRoutingModule } from '@smart/smart.routing';
import { smartEffects } from '@smart/store/effects';
import { smartReducer } from '@smart/store/reducer';

@NgModule({
  declarations: [
    SmartComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature(smartEffects),
    SmartRoutingModule,
    SharedModule,
    StoreModule.forFeature('smart', smartReducer)
  ]
})
export class SmartModule { }
