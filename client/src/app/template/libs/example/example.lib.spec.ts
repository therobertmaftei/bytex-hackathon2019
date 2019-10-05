import { example } from './example.lib';

describe('example', () => {
  it('should return computed value', () => {
    expect(example(1, 2)).toBe(3);
  });
});
