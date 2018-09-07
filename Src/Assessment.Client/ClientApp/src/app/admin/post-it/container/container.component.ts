import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  Input
} from '@angular/core';
import { AppEntityServices } from '../../../store/entity/app-entity-services';
import { PostIt, IdGeneratorService } from '../../../core';
import { ContainerComponentBase } from '../../../core/entity-components/container-component-base';
import { MatDialog } from '@angular/material';
import { PostItItemDialogComponent } from '../item/item-dialog.component';
import { Store, select, createSelector } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
// import {
//   CodeLanguageService,
//   PostItSetService
// } from '../../../core/entity-collection-services';
import { AppSelectors } from '../../../store/app-config';
import { EntityCache, Dictionary } from 'ngrx-data';
import { take, filter, map } from 'rxjs/operators';
import * as fromEntities from '../../../store/entity/selectors';
// import { PostItItemModalComponent } from '../item/item-modal.component';

@Component({
  selector: 'ncg-post-it-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItContainerComponent
  extends ContainerComponentBase<
    PostIt,
    PostItItemDialogComponent,
    // PostItItemModalComponent,
    {
      // postIttSets: Dictionary<PostItSet>[];
    }
  >
  implements OnInit {
  // @ViewChild('itemModal') itemModal: PostItItemModalComponent;
  @ViewChild('itemEntityModal')
  itemEntityModal: any;
  @Input('boardId')
  boardId: number;
  filterByFkId$: Observable<PostIt[]>;
  // filterByFkId$: Subscription;

  constructor(
    appEntityServices: AppEntityServices,
    dialog: MatDialog,
    appSelectors: AppSelectors,
    idGenerator: IdGeneratorService,
    store: Store<EntityCache>
  ) {
    super(
      appEntityServices,
      appEntityServices.postItService,
      dialog,
      appSelectors,
      idGenerator,
      store
    );

    this.filterByFkId$ = this.filteredEntities$.pipe(
      map(entities =>
        entities.filter(e => !this.boardId || e.boardId === this.boardId)
      )
    );

    // this.codeLanguages$ = this.appEntityServices.codeLanguageService.entities$;
  }

  ngOnInit() {
    super.ngOnInit();
    // TODO:
    // this.appEntityServices.boardService.getAll();
  }

  getDisplayedColumns() {
    return ['actions', 'id', 'name', 'createdAt'];
  }

  getLooksups() {}

  openDialogAndSetCommands(entity: PostIt) {
    // set boardId
    this.dialogConfig.data = {
      ...this.dialogConfig.data,
      boardId: this.boardId
    };

    const dialogRef = this.dialog.open<PostItItemDialogComponent>(
      PostItItemDialogComponent,
      this.dialogConfig
    );
  }
}
