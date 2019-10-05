import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-dots',
  templateUrl: './loading-dots.component.html',
  styleUrls: ['./loading-dots.component.scss']
})
export class LoadingDotsComponent {
  @Input() public message?: string;
}
