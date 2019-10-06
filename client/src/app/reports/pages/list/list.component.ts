import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { List } from 'immutable';

import { CATEGORIES } from '@reports/constants';
import { ILocationResponse, IReport } from '@reports/models';
import { Actions } from '@reports/store/actions';
import { IState } from '@reports/store/reducer';
import { locationSelector, reportsSelector, reportsStateLoadingSelector } from '@reports/store/state';
import { IMapOptions } from '@shared/components';
import { BaseComponent } from '@shared/containers';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ReportListComponent extends BaseComponent implements OnInit {
  public reports: IReport[] = [];
  public map: IMapOptions;
  public categories = new FormControl();
  public categoriesList: string[] = [...CATEGORIES.items];

  private coordinates: ILocationResponse;

  constructor(private store$: Store<IState>) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions$.push(
      this.categories.valueChanges
        .subscribe((category: string) => this.store$.dispatch(
          Actions.getReports.dispatchLoading({ ...this.coordinates, category }))
        ),
      this.store$
        .pipe(select(reportsStateLoadingSelector))
        .subscribe((response: boolean) => (this.isLoading = response)),
      this.store$
        .pipe(select(locationSelector))
        .subscribe((value) => {
          if (value) {
            this.coordinates = {
              lat: value.latitude,
              lng: value.longitude
            };
            this.store$.dispatch(Actions.getReports.dispatchLoading(this.coordinates));
          }
        }),
      this.store$
        .pipe(select(reportsSelector))
        .subscribe((value) => {
          this.reports = List(value).toJS();
          if (this.reports.length) {
            this.map = {
              location: {
                latitude: this.reports[0].location.lat,
                longitude: this.reports[0].location.lng,
                zoom: 15
              },
              markers: this.reports.map(item => {
                return {
                  title: item.title,
                  details: item.description,
                  latitude: item.location.lat,
                  longitude: item.location.lng
                };
              })
            };
          }
      })
    );
  }

  public addReport(): void {
    // @todo
  }
}
