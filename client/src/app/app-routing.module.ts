import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '@core/constants';
import { LandingComponent } from '@core/containers';
import { CoreComponent } from '@core/core.component';
import { IsAuthenticatedGuard, IsNotAuthenticatedGuard } from '@session/guards';
import { LoginComponent, LogoutComponent, RegisterComponent } from '@session/pages';

const routes: Routes = [
  {
    path: ROUTES.LANDING.url,
    canActivate: [IsAuthenticatedGuard],
    component: LandingComponent
  },
  {
    path: 'login',
    canActivate: [IsAuthenticatedGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [IsAuthenticatedGuard],
    component: RegisterComponent
  },
  {
    path: 'logout',
    canActivate: [IsAuthenticatedGuard],
    component: LogoutComponent
  },
  {
    path: '',
    component: CoreComponent,
    canActivate: [IsNotAuthenticatedGuard],
    children: [
      {
        path: ROUTES.REPORTS.url,
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: ROUTES.SMART.url,
        loadChildren: () => import('./smart/smart.module').then(m => m.SmartModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: `/reports`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
