export interface IRequest<T> {
  success: boolean;
  data?: T;
  message?: string[];
}
