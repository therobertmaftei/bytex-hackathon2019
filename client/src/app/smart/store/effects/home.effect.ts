import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { IRequest } from '@shared/models';
import { HTTPService } from '@shared/services';
import { Actions as SmartActions } from '../actions';

@Injectable()
export class HomeEffect {
  // @Effect()
  // public reports = this.actions$.pipe(
  //   ofType(SmartActions.getReports.loading()),
  //   mergeMap((action: any) => this.api.get<{ reports: IReport }>('reports', action.payload).pipe(
  //     map((response: IRequest<{ reports: IReport }>) => SmartActions.getReports.dispatchComplete(response.data.reports)),
  //     catchError((errors: any) => of(SmartActions.getReports.dispatchFailed(errors)))
  //   ))
  // );

  constructor(
    private actions$: Actions,
    private api: HTTPService
  ) { }
}
