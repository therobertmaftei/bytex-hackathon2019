import { TestBed } from '@angular/core/testing';
import { ExampleResolver } from './example.resolver';

describe('example resolver', () => {
  let resolver: ExampleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExampleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
