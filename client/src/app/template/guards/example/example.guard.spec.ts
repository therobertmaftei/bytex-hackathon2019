import { inject, TestBed } from '@angular/core/testing';

import { ExampleGuard } from './example.guard';

describe('ExampleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleGuard],
    });
  });

  it('should ...', inject([ExampleGuard], (guard: ExampleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
