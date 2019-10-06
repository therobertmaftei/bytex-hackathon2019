import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environment';
import { IQueryParam, IRequest } from '@shared/models';

@Injectable()
export class HTTPService {
  private server: string = `${environment.server.ip}`;

  constructor(protected http: HttpClient) { }

  public post<P, T>(endpoint: string, body: P, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.post<IRequest<T>>(
      this.buildEndpoint(endpoint, queryParams),
      body,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        })
      }
    );
  }

  public get<T>(endpoint: string, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.get<IRequest<T>>(
      this.buildEndpoint(endpoint, queryParams),
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        })
      }
    );
  }

  public put<P, T>(endpoint: string, body: P, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.put<IRequest<T>>(
      this.buildEndpoint(endpoint, queryParams),
      body,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        })
      }
      );
  }

  public delete<T>(endpoint: string, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.delete<IRequest<T>>(
      this.buildEndpoint(endpoint, queryParams),
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        })
      }
    );
  }

  private buildEndpoint(endpoint: string, queryParams?: IQueryParam): string {
    endpoint = `${this.server}/${endpoint}`;
    if (queryParams) {
      endpoint = `${endpoint}?`;
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          const value = queryParams[key];
          endpoint = `${endpoint}${key}=${value}&`;
        }
      }
      endpoint  = endpoint.slice(0, -1);
    }
    return endpoint;
  }
}
