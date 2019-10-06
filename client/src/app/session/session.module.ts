import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { RouterModule } from '@angular/router';
import { LoginComponent, LogoutComponent, RegisterComponent } from '@session/pages';
import { sessionEffects, sessionReducer } from '@session/store';
import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    EffectsModule.forFeature(sessionEffects),
    SharedModule,
    StoreModule.forFeature('session', sessionReducer),
    TranslateModule.forChild(translateConfig),
    RouterModule
  ],
  exports: [
    RouterModule,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ]
})
export class SessionModule { }
