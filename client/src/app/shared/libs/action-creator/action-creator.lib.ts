import { IActionCreator } from '@shared/libs';

import { ActionStates } from './action-states.enum';

export class ActionCreator<E = never, L = never, C = never, F = never> {
  private readonly type: string;

  constructor(type: string) {
    this.type = type;
  }

  public event(): string {
    return this.type;
  }

  public loading(): string {
    return `${ this.type }__${ ActionStates.LOADING }`;
  }

  public failed(): string {
    return `${ this.type }__${ ActionStates.FAILED }`;
  }

  public complete(): string {
    return `${ this.type }__${ ActionStates.COMPLETE }`;
  }

  public dispatchLoading(payload?: L): IActionCreator<L> {
    return {
      type: this.loading(),
      payload,
    };
  }

  public dispatchFailed(payload?: F): IActionCreator<F> {
    return {
      type: this.failed(),
      payload,
    };
  }

  public dispatchComplete(payload?: C): IActionCreator<C> {
    return {
      type: this.complete(),
      payload,
    };
  }

  public dispatchEvent(payload?: E): IActionCreator<E> {
    return {
      type: this.type,
      payload,
    };
  }
}
