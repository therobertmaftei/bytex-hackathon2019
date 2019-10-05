import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  CandidButtonComponent,
  CandidCheckboxComponent,
  CandidInputComponent,
  CandidRadioComponent,
  CandidSelectComponent,
  CandidTableComponent
} from '@ui/components';
import { MaterialModule } from '@ui/material.module';

const wrappers = [
  CandidButtonComponent,
  CandidCheckboxComponent,
  CandidInputComponent,
  CandidRadioComponent,
  CandidSelectComponent,
  CandidTableComponent
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
