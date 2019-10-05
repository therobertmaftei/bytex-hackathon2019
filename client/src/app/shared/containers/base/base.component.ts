import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: '',
})
export class BaseComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  protected subscriptions$: Subscription[];

  public ngOnInit(): void {
    this.subscriptions$ = [];
  }

  public ngOnDestroy(): void {
    this.unsubscribe(this.subscriptions$);
  }

  protected unsubscribe(subscriptions$: Subscription[]): void {
    subscriptions$.forEach((subscription$: Subscription) => subscription$.unsubscribe());
  }
}
