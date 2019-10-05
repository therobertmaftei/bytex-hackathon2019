import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {
  @memo()
  transform(value: any, ...args: any[]): any {
    return null;
  }
}
