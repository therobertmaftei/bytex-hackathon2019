import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatMenuModule, MatSnackBar } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { BaseComponent } from '@shared/containers';
import { RoutePipe } from '@shared/pipes';
import { UIModule } from '@ui/ui.module';
import { SharedMapsComponent } from './components';
import { HTTPService } from './services';

@NgModule({
  declarations: [
    BaseComponent,
    RoutePipe,
    SharedMapsComponent
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk4RXpu0S8rnh_CJgFLvyCnKB-8NJaH68'
    }),
    UIModule
  ],
  exports: [
    BaseComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutePipe,
    SharedMapsComponent,
    UIModule
  ],
  providers: [
    MatSnackBar,
    HTTPService
  ]
})
export class SharedModule { }
