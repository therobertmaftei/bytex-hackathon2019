import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from '@core/core.component';
import { AppReadyResolver } from '@core/resolvers';
import { LoginComponent, LogoutComponent } from '@session/pages';
// import { IsAuthenticatedGuard } from '@session/guards';

const routes: Routes = [
  {
    path: 'login',
    resolve: {
      appReady: AppReadyResolver,
    },
    component: LoginComponent,
  },
  {
    path: 'logout',
    resolve: {
      appReady: AppReadyResolver,
    },
    component: LogoutComponent,
  },
  {
    path: '',
    component: CoreComponent,
    resolve: {
      appReady: AppReadyResolver,
    },
    // canActivateChild: [IsAuthenticatedGuard],
    // children: [
    //
    // ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
