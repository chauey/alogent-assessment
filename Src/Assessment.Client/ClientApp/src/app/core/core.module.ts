import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IdGeneratorService } from './id-generator.service';
import { ToggleDataSourceComponent } from './toggle-data-source.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToastService } from './toast.service';
import { throwIfAlreadyLoaded } from './module-import-check';
import { SharedComponentsModule } from '../shared/shared.components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule // because we use <router-outlet> and routerLink
  ],
  declarations: [ToggleDataSourceComponent, ToolbarComponent],
  exports: [
    SharedComponentsModule,
    ToggleDataSourceComponent,
    ToolbarComponent
  ],
  providers: [IdGeneratorService, ToastService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
