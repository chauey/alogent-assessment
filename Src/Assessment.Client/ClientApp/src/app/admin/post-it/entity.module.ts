import { NgModule } from '@angular/core';

import { PostItRoutingModule } from './routing.module';

import { PostItContainerComponent } from './container/container.component';

import { PostItListComponent } from './list/list.component';
import { PostItListMatTableComponent } from './list/list-mat-table.component';

import { PostItItemComponent } from './item/item.component';
import { PostItItemDialogComponent } from './item/item-dialog.component';
import { SharedComponentsModule } from '../../shared/shared.components.module';

@NgModule({
  imports: [SharedComponentsModule, PostItRoutingModule],
  declarations: [
    PostItContainerComponent,
    PostItListComponent,
    PostItListMatTableComponent,

    PostItItemComponent,
    PostItItemDialogComponent,
  ],
  entryComponents: [PostItItemDialogComponent]
})
export class PostItModule {}
