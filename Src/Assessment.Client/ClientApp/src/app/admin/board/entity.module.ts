import { NgModule } from '@angular/core';

// import { SharedModule } from '../../shared/shared.module';

import { BoardRoutingModule } from './routing.module';

import { BoardContainerComponent } from './container/container.component';

import { BoardListComponent } from './list/list.component';
import { BoardListMatTableComponent } from './list/list-mat-table.component';

import { BoardItemComponent } from './item/item.component';
import { BoardItemDialogComponent } from './item/item-dialog.component';
import { SharedComponentsModule } from '../../shared/shared.components.module';
import { PostItContainerComponent } from '../post-it/container/container.component';
import { PostItListComponent } from '../post-it/list/list.component';
import { PostItListMatTableComponent } from '../post-it/list/list-mat-table.component';
import { PostItItemComponent } from '../post-it/item/item.component';
import { PostItItemDialogComponent } from '../post-it/item/item-dialog.component';

@NgModule({
  imports: [SharedComponentsModule, BoardRoutingModule],
  declarations: [
    BoardContainerComponent,
    BoardListComponent,
    BoardListMatTableComponent,

    BoardItemComponent,
    BoardItemDialogComponent,

    PostItContainerComponent,
    PostItListComponent,
    PostItListMatTableComponent,

    PostItItemComponent,
    PostItItemDialogComponent
  ],
  entryComponents: [BoardItemDialogComponent, PostItItemDialogComponent]
})
export class BoardModule {}
