import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@shared/containers';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
