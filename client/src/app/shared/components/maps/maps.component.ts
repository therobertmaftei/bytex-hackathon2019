import { MapsEventListener } from '@agm/core/services/google-maps-types';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material';

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IMarker extends ILocation {
  title: string;
  details: string;
  icon: {
    url: string;
    scaledSize: {
      width: number;
      height: number;
    }
  };
}

export interface IMapOptions {
  location: Partial<ILocation>;
  markers: Partial<IMarker>[];
}

@Component({
  selector: 'shared-maps',
  styleUrls: ['./maps.component.scss'],
  templateUrl: './maps.component.html'
})
export class SharedMapsComponent implements OnInit {
  @Input() public map: IMapOptions = this.getEmptyMap();
  @Input() public addMarkers: boolean;

  @ViewChild('matMenuTrigger', { static: true })
  public menu: MatMenuTrigger;

  // public loading: boolean = true;
  private currentPosition: Partial<ILocation>;

  public ngOnInit(): void {
    this.getCurrentLocation().then(() => {
      this.map.location.latitude = this.currentPosition.latitude;
      this.map.location.longitude = this.currentPosition.longitude;
    }).catch(() => {
      // this.loading = false;
    });
  }

  public addItem(event: any): void {
    if (!this.addMarkers) {
      return;
    }

    this.map.markers.push({
      latitude: event.coords.lat,
      longitude: event.coords.lng
    });
  }

  private getCurrentLocation(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.currentPosition = position.coords;
          resolve();
        });
      } else {
        reject();
      }
    });
  }

  private getEmptyMap(): IMapOptions {
    return {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 15
      },
      markers: []
    };
  }
}
