export interface IRequest<T> {
  success: boolean;
  data?: T;
  message?: string[];
  loading?: boolean;
}

export interface IQueryParam {
  [key: string]: string;
}
