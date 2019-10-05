import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { CoreModule } from '@core/core.module';
import { ApiInterceptor } from '@core/services';
import { coreEffects, coreReducer } from '@core/store';
import { environment } from '@environment';
import { SdkModule } from '@sdk/sdk.module';
import { SessionModule } from '@session/session.module';
import { translateConfig } from '@shared/libs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    EffectsModule.forRoot(coreEffects),
    StoreModule.forRoot({ core: coreReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    SdkModule,
    SessionModule,
    TranslateModule.forRoot(translateConfig),
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
