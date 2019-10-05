import { NgModule } from '@angular/core';

import { ApiModule } from './microservices/api/api.module';

@NgModule({
  imports: [
    ApiModule.forRoot({ rootUrl: '' }),
  ],
})
export class SdkModule {
}
