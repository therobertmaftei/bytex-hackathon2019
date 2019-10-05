import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent, HeaderComponent } from '@core/containers';
import { CoreComponent } from '@core/core.component';
import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CoreComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    TranslateModule.forChild(translateConfig),
  ],
  exports: [CoreComponent],
})
export class CoreModule {
}
