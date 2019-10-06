import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { select, Store } from '@ngrx/store';

import { CATEGORIES } from '@reports/constants';
import { ILocationResponse } from '@reports/models';
import { Actions } from '@reports/store/actions';
import { IState } from '@reports/store/reducer';
import { locationSelector, reportStateDataSelector, reportStateLoadingSelector } from '@reports/store/state';
import { BaseComponent } from '@shared/containers';

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewReportsComponent extends BaseComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public loadingMessage: string = null;
  public categoriesList: string[] = CATEGORIES.items;

  private coordinates: ILocationResponse;

  constructor(
    private dialogRef: MatDialogRef<NewReportsComponent>,
    private formBuilder: FormBuilder,
    private store$: Store<IState>
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions$.push(
      this.store$
        .pipe(select(reportStateLoadingSelector))
        .subscribe((response: boolean) => (this.isLoading = response)),
      this.store$
        .pipe(select(reportStateDataSelector))
        .subscribe((response) => {
          if (response) {
            this.close();
          }
        }),
      this.store$
        .pipe(select(locationSelector))
        .subscribe((value) => {
          if (value) {
            this.coordinates = {
              lat: value.latitude,
              lng: value.longitude
            };
          }
        })
    );

    this.initForm();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
    this.store$.dispatch(Actions.clearReport.dispatchEvent());
  }

  public submit(): void {
    this.loadingMessage = 'common.submitting';
    this.store$.dispatch(Actions.addReport.dispatchLoading({
      report: {
        title: this.form.get('title').value,
        description: this.form.get('description').value,
        category: this.form.get('category').value
      },
      queryParams: this.coordinates
    }));
  }

  public close(): void {
    this.dialogRef.close();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      category: this.formBuilder.control(this.categoriesList[0], [Validators.required])
    });
  }
}
