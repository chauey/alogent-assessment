// angular
import { NgModule } from '@angular/core';

// routing
import { AdminRoutingModule, routedComponents } from './admin.routing';
import { SharedComponentsModule } from '../shared/shared.components.module';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    SharedComponentsModule,
    AdminRoutingModule
  ],
  exports: [
  ],
  entryComponents: [
    ...routedComponents
  ]
})
export class AdminModule {}
