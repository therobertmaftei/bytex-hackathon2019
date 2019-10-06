import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { IPostPayload, IReport } from '@reports/models';
import { IRequest } from '@shared/models';
import { HTTPService } from '@shared/services';
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

  @Effect()
  public post = this.actions$.pipe(
    ofType(ReportsActions.addReport.loading()),
    mergeMap((action: any) =>
      this.api.post<IPostPayload, { report: IReport }>('reports', action.payload.report, action.payload.queryParams).pipe(
        map((response: IRequest<{ report: IReport }>) => ReportsActions.addReport.dispatchComplete(response.data.report)),
        catchError((errors: any) => of(ReportsActions.addReport.dispatchFailed(errors)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private api: HTTPService
  ) { }
}
