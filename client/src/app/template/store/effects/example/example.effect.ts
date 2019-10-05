import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { List } from 'immutable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { StoreService } from '@sdk/microservices/api/services';
import { IActionCreator } from '@shared/libs';
import { Actions as TemplateActions } from '@template/store/actions';

@Injectable()
export class ExampleEffect {
  @Effect()
  public loadDomains$ = this.actions$.pipe(
    ofType(TemplateActions.example.loading()),
    mergeMap((action: IActionCreator) => this.api.getInventory().pipe(
      map((response: any) => TemplateActions.example.dispatchComplete(response)),
      catchError((error: List<any>) => of(TemplateActions.example.dispatchFailed(error))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private api: StoreService,
  ) {
  }
}
