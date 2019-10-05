import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environment';
import { IQueryParam, IRequest } from '@shared/models';

@Injectable()
export class HTTPService {
  private server: string = `${environment.server.ip}:${environment.server.port}`;

  constructor(protected http: HttpClient) { }

  public post<P, T>(endpoint: string, body: P, queryParams?: IQueryParam[]): Observable<IRequest<T>> {
    return this.http.post<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), body);
  }

  public get<T>(endpoint: string, queryParams?: IQueryParam[]): Observable<IRequest<T>> {
    return this.http.get<IRequest<T>>(this.buildEndpoint(endpoint, queryParams));
  }

  public put<P, T>(endpoint: string, body: P, queryParams?: IQueryParam[]): Observable<IRequest<T>> {
    return this.http.put<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), body);
  }

  public delete<T>(endpoint: string, queryParams?: IQueryParam[]): Observable<IRequest<T>> {
    return this.http.delete<IRequest<T>>(this.buildEndpoint(endpoint, queryParams));
  }

  private buildEndpoint(endpoint: string, queryParams?: IQueryParam[]): string {
    endpoint = `${this.server}/${endpoint}`;
    if (queryParams && queryParams.length > 0) {
      endpoint = `${endpoint}?`;
      queryParams.forEach((param: IQueryParam) => {
        endpoint = `${endpoint}${Object.keys(param)[0]}=${param}`;
      });
    }

    return endpoint;
  }
}
