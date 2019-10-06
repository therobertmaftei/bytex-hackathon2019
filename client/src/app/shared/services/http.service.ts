import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environment';
import { IQueryParam, IRequest } from '@shared/models';

@Injectable()
export class HTTPService {
  private server: string = `${environment.server.ip}`;
  private headers: HttpHeaders = new HttpHeaders({
    // tslint:disable-next-line: max-line-length
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDE5LTEwLTA2VDAxOjQ2OjQyLjQwOFoiLCJ1cGRhdGVkQXQiOiIyMDE5LTEwLTA2VDAxOjQ2OjQyLjQwOFoiLCJlbWFpbCI6Imdlb3JnZS5tb3NjdUBieXRleC5ybyIsImZpcnN0bmFtZSI6Ikdlb3JnZSIsImxhc3RuYW1lIjoiTW9zY3UiLCJwcm9maWxlUGljdHVyZSI6Imh0dHBzOi8vZGV2LWFwaS1oZWNrLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL3Byb2ZpbGVQaWN0dXJlcy80NGYwNTdhYS1mZmRlLTRmZWMtODA3YS1lYmNjYTA2NzU2YjkucG5nIiwiX192IjowLCJhdWQiOiJodHRwczovL2FwaS5kZXYuaGVjay5ybyIsImlzcyI6ImFwaS5kZXYuaGVjay5ybyIsInVzZXI6aWQiOiI1ZDk5NDc4MjIzZjBlYWE4MTQ0ZjZiMGIiLCJpYXQiOjE1NzAzMjkwMDEsImV4cCI6MTU3MDkzMzgwMX0.4cwwsWrabbAKexY7S0QqLhu7hgco5Lk2Sfwafm44hXI'
  });

  constructor(protected http: HttpClient) { }

  public post<P, T>(endpoint: string, body: P, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.post<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), body, { headers: this.headers });
  }

  public get<T>(endpoint: string, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.get<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), { headers: this.headers });
  }

  public put<P, T>(endpoint: string, body: P, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.put<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), body, { headers: this.headers });
  }

  public delete<T>(endpoint: string, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.delete<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), { headers: this.headers });
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
