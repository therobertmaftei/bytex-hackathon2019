import { Component, OnInit } from '@angular/core';

import { IReport } from '@reports/models';
import { IMapOptions, IMarker } from '@shared/components';
import { BaseComponent } from '@shared/containers';
import { HTTPService } from '@shared/services';

@Component({
  selector: 'smart-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class SmartCarsComponent extends BaseComponent implements OnInit {
  public user: any;
  public map: IMapOptions;

  constructor(private http: HTTPService) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.http.get<any>('car').subscribe(value => {
      const cars: IReport[] = value.data.cars;
      if (!cars || !cars.length) {
        return;
      }

      this.map = {
        location: {
          latitude: cars[0].location.lat,
          longitude: cars[0].location.lng,
          zoom: 15
        },
        markers: cars.map((item: any, index: number) => ({
          title: `Car ${index + 1}`,
          details: item.state.connected ? 'Connected' : 'Disconnected',
          latitude: item.location.lat,
          longitude: item.location.lng
        } as IMarker))
      } as IMapOptions;
    });
  }
}
