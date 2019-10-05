import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatMenuModule, MatSnackBar } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { BaseComponent } from '@shared/containers';
import { RoutePipe } from '@shared/pipes';
import { UIModule } from '@ui/ui.module';

@NgModule({
  declarations: [
    BaseComponent,
    RoutePipe
  ],
  imports: [
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
    UIModule
  ],
  providers: [
    MatSnackBar
  ]
})
export class SharedModule { }
