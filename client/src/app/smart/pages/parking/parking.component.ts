import { Component, OnInit } from '@angular/core';

import { IReport } from '@reports/models';
import { IMapOptions, IMarker } from '@shared/components';
import { BaseComponent } from '@shared/containers';
import { HTTPService } from '@shared/services';

@Component({
  selector: 'smart-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class SmartParkingComponent extends BaseComponent implements OnInit {
  public user: any;
  public map: IMapOptions;

  constructor(private http: HTTPService) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.http.get<any>('park').subscribe(value => {
      const parks: IReport[] = value.data.parks;
      if (!parks || !parks.length) {
        return;
      }

      this.map = {
        location: {
          latitude: parks[0].location.lat,
          longitude: parks[0].location.lng,
          zoom: 15
        },
        markers: parks.map((item: any) => ({
          title: item.address,
          details: `${item.usage.used}/${item.usage.total} used`,
          latitude: item.location.lat,
          longitude: item.location.lng
        } as IMarker))
      } as IMapOptions;
    });
  }
}
