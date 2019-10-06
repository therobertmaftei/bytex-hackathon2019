import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '@shared/containers';
import { HTTPService } from '@shared/services';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public user: any;

  constructor(
    private http: HTTPService,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions$.push(
      this.http.get<any>('users').subscribe(value => {
        // localStorage.setItem('user', value.data.user);
        this.user = value.data.user;
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
