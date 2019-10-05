import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import {
  FooterComponent,
  HeaderComponent,
  LandingComponent,
  SidebarComponent
} from '@core/containers';
import { HelpComponent } from '@core/containers/sidebar/components';
import { CoreComponent } from '@core/core.component';
import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CoreComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    SidebarComponent,
    HelpComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    TranslateModule.forChild(translateConfig)
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
