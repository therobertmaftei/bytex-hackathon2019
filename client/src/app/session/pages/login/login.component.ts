import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '@session/services';
import { IState } from '@session/store/reducer';
import { BaseComponent } from '@shared/containers';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor(
    private store$: Store<IState>,
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

  }

  public login(): void {

  }
}
