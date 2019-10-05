import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '@session/store/reducer';

@Component({
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private store$: Store<IState>) {
  }

  public ngOnInit(): void {

  }
}
