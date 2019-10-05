import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseComponent } from '@shared/containers';
import { IStore } from '@shared/models';

@Component({
  selector: 'prefix-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent extends BaseComponent implements OnInit {
  constructor(private store$: Store<IStore>) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
