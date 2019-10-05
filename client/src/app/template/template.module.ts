import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { translateConfig } from '@shared/libs';
import { SharedModule } from '@shared/shared.module';

import { templateEffects, templateReducer } from './store';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    EffectsModule.forFeature(templateEffects),
    StoreModule.forFeature('template', templateReducer),
    TranslateModule.forChild(translateConfig),
    SharedModule,
  ],
})
export class TemplateModule {
}
