import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild
} from '@angular/core';
import { AppEntityServices } from '../../../store/entity/app-entity-services';
import {
  Board,
  IdGeneratorService
} from '../../../core';
import { ContainerComponentBase } from '../../../core/entity-components/container-component-base';
import { MatDialog } from '@angular/material';
import { BoardItemDialogComponent } from '../item/item-dialog.component';
import { Store, select, createSelector } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
// import {
//   CodeLanguageService,
//   BoardSetService
// } from '../../../core/entity-collection-services';
import { AppSelectors } from '../../../store/app-config';
import { EntityCache, Dictionary } from 'ngrx-data';
import { take } from 'rxjs/operators';
import * as fromEntities from '../../../store/entity/selectors';
// import { BoardItemModalComponent } from '../item/item-modal.component';

@Component({
  selector: 'ncg-board-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
}) // , { codeLanguages: CodeLanguage[]; boardSets: BoardSet[] }>
export class BoardContainerComponent
  extends ContainerComponentBase<
    Board,
    BoardItemDialogComponent,
    // BoardItemModalComponent,
    {
      // codeLanguages: Dictionary<CodeLanguage>[];
      // boardSets: Dictionary<BoardSet>[];
    }
  >
  implements OnInit {
  // @ViewChild('itemModal') itemModal: BoardItemModalComponent;
  @ViewChild('itemEntityModal') itemEntityModal: any;

  constructor(
    appEntityServices: AppEntityServices,
    dialog: MatDialog,
    appSelectors: AppSelectors,
    idGenerator: IdGeneratorService,
    store: Store<EntityCache>
  ) {
    super(
      appEntityServices,
      appEntityServices.boardService,
      dialog,
      appSelectors,
      idGenerator,
      store
    );

    // this.codeLanguages$ = this.appEntityServices.codeLanguageService.entities$;
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getDisplayedColumns() {
    return ['actions', 'id', 'name', 'createdAt'];
  }

  getLooksups() {

  }

  openDialogAndSetCommands(entity: Board) {
    this.dialogConfig.data = {
      ...this.dialogConfig.data
    };

    const dialogRef = this.dialog.open<BoardItemDialogComponent>(
      BoardItemDialogComponent,
      this.dialogConfig
    );
  }
}
