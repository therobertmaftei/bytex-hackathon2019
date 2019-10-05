import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent, HeaderComponent, SidebarComponent } from '@core/containers';
import { CoreComponent } from '@core/core.component';
import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';
import { ReportsModule } from '../reports/report.module';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';

@NgModule({
  declarations: [
    CoreComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    TranslateModule.forChild(translateConfig),
    ReportsModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
