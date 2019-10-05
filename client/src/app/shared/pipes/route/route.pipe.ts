import { Pipe, PipeTransform } from '@angular/core';

import { RoutePath } from '@shared/libs';

@Pipe({
  name: 'route'
})
export class RoutePipe implements PipeTransform {
  public transform(value: string, nested?: string[]): string {
    if (nested) {
      return RoutePath.buildChildrenPath(value, nested);
    }

    return RoutePath.buildRootPath(value);
  }
}
