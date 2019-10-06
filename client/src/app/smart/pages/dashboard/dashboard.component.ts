import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@shared/containers';

@Component({
  selector: 'smart-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SmartDashboardComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
