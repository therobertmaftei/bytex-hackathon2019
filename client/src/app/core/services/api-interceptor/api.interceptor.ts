import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthenticationService } from '@session/services';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) { }

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.authorizeRequest(req)).pipe(
      map((response: HttpResponse<any>) => {
        return response;
      }),
      catchError(err => {
        if (err.status === 401) {

        }
        if (Array.isArray(err.error.messages)) {
          return throwError(err.error.messages);
        }

        return throwError([]);
      })
    );
  }

  public authorizeRequest(req: HttpRequest<any>) {
    const setHeaders = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8'
    };

    return req.clone({ setHeaders });
  }
}
