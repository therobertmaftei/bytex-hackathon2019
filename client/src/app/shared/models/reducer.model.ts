export interface IReducer<S> {
  [key: string]: (state: S, payload: any) => S;
}
