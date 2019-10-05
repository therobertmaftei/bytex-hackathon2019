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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlb2Rvci5wcm9jYUBieXRleC5ybyIsImZpcnN0bmFtZSI6IlRlb2RvciIsImxhc3RuYW1lIjoiUHJvY2EiLCJwcm9maWxlUGljdHVyZSI6Imh0dHBzOi8vZGV2LWFwaS1oZWNrLnMzLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL3Byb2ZpbGVQaWN0dXJlcy8xNzlhZjVhOC0xYWRkLTRjYjEtYWM5ZS0yYTMwOTFkNmRkZjAucG5nIiwiX192IjowLCJhdWQiOiJodHRwczovL2FwaS5kZXYuaGVjay5ybyIsImlzcyI6ImFwaS5kZXYuaGVjay5ybyIsInVzZXI6aWQiOiI1ZDk4NmM1ZTNmM2M3NzljNWU4NDVkYjUiLCJpYXQiOjE1NzAyNzAzMDIsImV4cCI6MTU3MDg3NTEwMn0.pYJys6cJl_eKejVz3C3JI-c622VUMl0teaAZZIWdgR4'
  });

  constructor(protected http: HttpClient) { }

  public post<P, T>(endpoint: string, body: P, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.post<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), body);
  }

  public get<T>(endpoint: string, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.get<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), { headers: this.headers });
  }

  public put<P, T>(endpoint: string, body: P, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.put<IRequest<T>>(this.buildEndpoint(endpoint, queryParams), body);
  }

  public delete<T>(endpoint: string, queryParams?: IQueryParam): Observable<IRequest<T>> {
    return this.http.delete<IRequest<T>>(this.buildEndpoint(endpoint, queryParams));
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
