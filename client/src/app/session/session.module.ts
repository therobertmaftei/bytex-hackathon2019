import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent, LogoutComponent } from '@session/pages';
import { sessionEffects, sessionReducer } from '@session/store';
import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    EffectsModule.forFeature(sessionEffects),
    SharedModule,
    StoreModule.forFeature('session', sessionReducer),
    TranslateModule.forChild(translateConfig)
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ]
})
export class SessionModule { }
