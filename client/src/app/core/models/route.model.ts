export interface IRoute {
  url: string;
  children?: {
    [key: string]: IRoute
  };
}
