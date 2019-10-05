import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { IState as ICoreState } from '@core/store/reducer';
import { IRecord, IStore } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class AppReadyResolver implements Resolve<boolean> {
  constructor(private store$: Store<IStore>) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.store$
      .pipe(
        select('core'),
        map((store: IRecord<ICoreState>) => store.get('isAppReadyToRender')),
        filter((isAppReadyToRender: boolean) => isAppReadyToRender),
        take(1)
      );
  }
}
