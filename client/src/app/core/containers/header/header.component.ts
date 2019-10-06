import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPService } from '@shared/services';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: any;

  constructor(private http: HTTPService, private router: Router) {}

  public ngOnInit(): void {
    this.http.get<any>('users').subscribe(value => {
      // localStorage.setItem('user', value.data.user);
      this.user = value.data.user;
    });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
