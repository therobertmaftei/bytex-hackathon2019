import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent {
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public type: 'error' | 'normal' = 'normal';
}
