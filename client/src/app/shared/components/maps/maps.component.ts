import { Component, Input } from '@angular/core';

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IMarker extends ILocation {
  title: string;
  details: string;
}

export interface IMapOptions {
  location: Partial<ILocation>;
  markers: IMarker[];
}

@Component({
  selector: 'shared-maps',
  styleUrls: ['./maps.component.scss'],
  templateUrl: './maps.component.html'
})
export class SharedMapsComponent {
  @Input() public map: IMapOptions;
}
