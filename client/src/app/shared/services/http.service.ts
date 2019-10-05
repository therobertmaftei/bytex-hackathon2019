import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environment';
import { IRequest } from '@shared/models';

@Injectable()
export class HTTPService {
  private server: string = `${environment.server.ip}:${environment.server.port}`;

  constructor(protected http: HttpClient) { }

  public post<P, T>(endpoint: string, body: P = null): Observable<IRequest<T>> {
    return this.http.post<IRequest<T>>(`${this.server}/${endpoint}`, body);
  }

  public get<T>(endpoint: string): Observable<IRequest<T>> {
    return this.http.get<IRequest<T>>(`${this.server}/${endpoint}`);
  }

  public put<P, T>(endpoint: string, body: T): Observable<IRequest<T>> {
    return this.http.put<IRequest<T>>(`${this.server}/${endpoint}`, body);
  }

  public delete<T>(endpoint: string): Observable<IRequest<T>> {
    return this.http
      .delete<IRequest<T>>(`${this.server}/${endpoint}`);
  }
}
