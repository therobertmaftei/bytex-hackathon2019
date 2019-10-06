import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseComponent } from '@shared/containers';
import { HTTPService } from '@shared/services';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {
  public readonly appName: string = 'city.ai';

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  constructor(
    private http: HTTPService,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public register(): void {
    this.subscriptions$.push(
      this.http.post<any, any>('users/auth/register', {
        email: this.form.get('email').value,
        firstname: this.form.get('firstName').value,
        lastname: this.form.get('lastName').value,
        password: this.form.get('password').value
      }).subscribe(value => {
        localStorage.setItem('token', value.data.token);
        this.router.navigate(['/reports']);
      })
    );
  }
}
