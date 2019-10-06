import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@shared/containers';

@Component({
  selector: 'smart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SmartHomeComponent extends BaseComponent implements OnInit {
  public user: any;

  constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
