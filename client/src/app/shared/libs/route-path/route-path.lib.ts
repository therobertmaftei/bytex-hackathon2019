import { ROUTES } from '@core/constants';

export class RoutePath {
  public static buildRootPath(root: string): string {
    if (typeof ROUTES[root] === 'undefined') {
      console.error(`"${root}" route is not available in ROUTES constant`);
      return `/${ROUTES.DASHBOARD.url}`;
    }

    return `/${ROUTES[root].url}`;
  }

  public static buildChildrenPath(root: string, nested: (string | object)[]): string {
    let parent = ROUTES[root];
    let path: string = RoutePath.buildRootPath(root);

    try {
      for (const child of nested) {
        if (typeof child === 'object') {
          const param: { key: string, value: string } = Object.entries(child)
            .map((value: [string, string]) => ({
              key: value[0],
              value: value[1]
            }))[0];

          parent = parent.children[param.key];
          path = `${path}/${param.value}`;
        } else {
          parent = parent.children[child];
          path = `${path}/${parent.url}`;
        }
      }

      return path;
    } catch (e) {
      console.error(`"${root}" route is not available in ROUTES constant`);
    }

    return `/${ROUTES.DASHBOARD.url}`;
  }
}
