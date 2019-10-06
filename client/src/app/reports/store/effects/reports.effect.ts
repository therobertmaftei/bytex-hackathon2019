import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { IRequest } from '@shared/models';
import { HTTPService } from '@shared/services';
import { IReport } from '../../models';
import { Actions as ReportsActions } from '../actions';

@Injectable()
export class ReportsEffect {
  @Effect()
  public getAll = this.actions$.pipe(
    ofType(ReportsActions.getReports.loading()),
    mergeMap((action: any) => this.api.get<{ reports: IReport }>('reports', action.payload).pipe(
      map((response: IRequest<{ reports: IReport }>) => ReportsActions.getReports.dispatchComplete(response.data.reports)),
      catchError((errors: any) => of(ReportsActions.getReports.dispatchFailed(errors)))
    ))
  );



  constructor(
    private actions$: Actions,
    private api: HTTPService
  ) {}
}
