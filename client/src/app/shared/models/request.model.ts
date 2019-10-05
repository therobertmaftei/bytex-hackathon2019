export interface IRequest<T> {
  success: boolean;
  data?: T;
  message?: string[];
}

export interface IQueryParam {
  [key: string]: string;
}
