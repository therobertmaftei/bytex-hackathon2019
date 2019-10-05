import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from '@core/core.component';
import { AppReadyResolver } from '@core/resolvers';
import { LoginComponent, LogoutComponent } from '@session/pages';
import { SharedMapsComponent } from '@shared/components';
// import { IsAuthenticatedGuard } from '@session/guards';

const routes: Routes = [
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
    component: CoreComponent,
    children: [
      {
        path: 'reports',
        loadChildren: () => import('./reports/report.module').then(m => m.ReportsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
