import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '@core/constants';
import { LandingComponent } from '@core/containers';
import { CoreComponent } from '@core/core.component';
import { AppReadyResolver } from '@core/resolvers';
import { LoginComponent, LogoutComponent } from '@session/pages';
import { SharedMapsComponent } from '@shared/components';
// import { IsAuthenticatedGuard } from '@session/guards';

const routes: Routes = [
  {
    path: ROUTES.LANDING.url,
    component: LandingComponent
  },
  {
    path: 'login',
    resolve: {
      appReady: AppReadyResolver
    },
    component: LoginComponent
  },
  {
    path: 'logout',
    resolve: {
      appReady: AppReadyResolver
    },
    component: LogoutComponent
  },
  {
    path: 'test',
    component: SharedMapsComponent
  },
  {
    path: '',
    component: CoreComponent
    // resolve: {
    //   appReady: AppReadyResolver
    // }
  },
  {
    path: '**',
    redirectTo: `/${ROUTES.LANDING.url}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
