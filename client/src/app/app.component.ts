import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  public ngOnInit(): void {
  }
}
