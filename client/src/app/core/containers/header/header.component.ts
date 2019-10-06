import { Component, OnInit } from '@angular/core';
import { HTTPService } from '@shared/services';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: any;

  constructor(private http: HTTPService) {}

  public ngOnInit(): void {
    this.http.get<any>('users').subscribe(value => {
      // localStorage.setItem('user', value.data.user);
      this.user = value.data.user;
    });
  }
}
