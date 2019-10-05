import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatMenuModule, MatSnackBar } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { BaseComponent } from '@shared/containers';
import { SharedMapsComponent } from './components';

@NgModule({
  declarations: [
    BaseComponent,
    SharedMapsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatMenuModule,
    ReactiveFormsModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk4RXpu0S8rnh_CJgFLvyCnKB-8NJaH68'
    })
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseComponent,
    AgmCoreModule,
    SharedMapsComponent
  ],
  providers: [
    MatSnackBar
  ]
})
export class SharedModule { }
