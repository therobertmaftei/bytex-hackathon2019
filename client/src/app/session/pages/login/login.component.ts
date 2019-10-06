import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { BaseComponent } from '@shared/containers';
import { HTTPService } from '@shared/services';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private router: Router,
    private auth: HTTPService,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login(event: MouseEvent): void {
    this.auth.post<{email: string; password: string}, any>(
      'users/auth/login',
      {
        email: this.form.get('email').value,
        password: this.form.get('password').value
      }
    ).subscribe(value => {
      localStorage.setItem('token', value.data.token);
      this.router.navigate(['']);
    });
  }
}
