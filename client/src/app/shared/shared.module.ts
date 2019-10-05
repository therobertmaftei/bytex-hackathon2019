import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatMenuModule, MatSnackBar } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import {
  SharedMapsComponent,
  SvgIconComponent
} from '@shared/components';
import { BaseComponent } from '@shared/containers';
import { RoutePipe } from '@shared/pipes';
import { UIModule } from '@ui/ui.module';

@NgModule({
  declarations: [
    BaseComponent,
    RoutePipe,
    SharedMapsComponent,
    SvgIconComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk4RXpu0S8rnh_CJgFLvyCnKB-8NJaH68'
    }),
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatMenuModule,
    ReactiveFormsModule,
    TranslateModule,
    UIModule
  ],
  exports: [
    BaseComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutePipe,
    SharedMapsComponent,
    SvgIconComponent,
    UIModule
  ],
  providers: [
    MatSnackBar
  ]
})
export class SharedModule { }
