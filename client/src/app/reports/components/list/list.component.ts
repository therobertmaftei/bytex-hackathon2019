import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IMapOptions, IMarker } from '@shared/components';
import { fromJS, List } from 'immutable';
import { ILocationResponse, IReport } from '../../models';
import { Actions } from '../../store/actions';
import { IState } from '../../store/reducer';
import { locationSelector, reportsSelector } from '../../store/state';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ReportListComponent implements OnInit {
  public coordinates: ILocationResponse;
  public map: IMapOptions;

  constructor(private store$: Store<IState>) {}

  public ngOnInit(): void {
    this.store$.pipe(select(locationSelector)).subscribe(value => {
      if (value) {
        this.coordinates = {
          lat: value.latitude,
          lng: value.longitude
        };
        this.store$.dispatch(Actions.getReports.dispatchLoading(this.coordinates));
      }
    });

    this.store$.pipe(select(reportsSelector)).subscribe((value) => {
      const reports: IReport[] = List(value).toJS();
      if (reports.length) {
        this.map = {
          location: {
            latitude: reports[0].location.lat,
            longitude: reports[0].location.lng,
            zoom: 15
          },
          markers: reports.map(item => {
            return {
              title: item.title,
              details: item.description,
              latitude: item.location.lat,
              longitude: item.location.lng
            };
          })
        };
      }
    });
  }
}
