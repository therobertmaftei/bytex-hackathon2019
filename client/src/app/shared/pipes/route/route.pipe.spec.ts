import { ROUTES } from '@core/constants';
import { RoutePipe } from './route.pipe';

describe('RoutePipe', () => {
  const routes = Object.keys(ROUTES).map((name) => [name, `/${ROUTES[name]}`]);
  let pipe: RoutePipe;
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

  beforeEach(() => {
    pipe = new RoutePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display an error', () => {
    expect(pipe.transform('NOT_FOUND_ROUTE')).toBe(`/${ROUTES.DASHBOARD.url}`);
    expect(consoleSpy.mock.calls.length).toBe(1);
  });

  test.each(routes)('"%s" should return the "%s" path', (name, route) => {
    expect(pipe.transform(name)).toBe(route);
  });
});
