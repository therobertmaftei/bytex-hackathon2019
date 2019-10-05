import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { BaseComponent } from '@shared/containers';
import { Actions } from '../reports/store/actions';
import { IState } from '../reports/store/reducer';
import { locationSelector } from '../reports/store/state';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent extends BaseComponent implements OnInit {
  constructor(
    private store: Store<IState>
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    navigator.geolocation.watchPosition((position) => {
      this.store.dispatch(Actions.geolocation.dispatchComplete(position.coords));
    });
  }
}
