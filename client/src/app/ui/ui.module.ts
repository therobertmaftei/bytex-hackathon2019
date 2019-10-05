import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  RadioComponent,
  SelectComponent,
  TableComponent
} from '@ui/components';
import { MaterialModule } from '@ui/material.module';

const wrappers = [
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  RadioComponent,
  SelectComponent,
  TableComponent
];

@NgModule({
  declarations: wrappers,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ...wrappers,
    MaterialModule
  ]
})
export class UIModule { }
