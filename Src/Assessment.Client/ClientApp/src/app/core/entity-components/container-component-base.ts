import {
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import {
  EntityCollectionService,
  EntityCache,
  Dictionary
} from 'ngrx-data';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { MasterDetailCommands, IdGeneratorService } from '../';
import { FilterObserver } from '../../shared/filter';
import { AppEntityServices } from '../../store/entity/app-entity-services';
import { NcgEntityCollectionServiceBase } from '../entity-collection-services/entity-collection-service-base';
import { map } from 'rxjs/operators';
import { AppSelectors } from '../../store/app-config';
import { Store, select } from '@ngrx/store';

import { ItemDialogComponentBase } from './item-dialog-component-base';
import {
  ListModeUpdated,
  ItemModeUpdated
} from '../../store/app-config/actions';
import { ItemComponentBase } from './item-component-base';

export abstract class ContainerComponentBase<
  T extends { id: number | string },
  U extends ItemDialogComponentBase<T>,
  V extends ItemComponentBase<T>,
  W extends { [key: string]: Dictionary<any>[] }
> implements MasterDetailCommands<T>, OnInit, OnDestroy {
  // @ViewChild('itemModal') itemModal: TemplateItemModalComponent;

  commands = this;
  dialogRef: MatDialogRef<U, any>;
  @ViewChild('itemEntityModal')
  itemEntityModal: V;

  selectedEntity: T;
  subscription: Subscription;

  filterObserver: FilterObserver;
  filteredEntities$: Observable<T[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  lookups$: Observable<{
    [key: string]: { name: string; id: number | string }[];
  }>;

  entityName: string;
  displayedColumns = ['actions', 'id', 'name'];
  itemMode: string;
  listMode$: Observable<string>;
  itemMode$: Observable<string>;

  dialogConfig: any;

  // Could have done the following, which is certainly clear enough
  // constructor(public templatesService: TemplatesService) {

  // use AppEntityServices instead to demonstrate how it works
  constructor(
    protected appEntityServices: AppEntityServices,
    protected entityCollectionService: EntityCollectionService<T>,
    protected dialog: MatDialog,
    private appSelectors: AppSelectors,
    private idGenerator: IdGeneratorService,
    protected store: Store<EntityCache>
  ) {
    if (this.entityCollectionService instanceof NcgEntityCollectionServiceBase)
      this.filterObserver = this.entityCollectionService.filterObserver;

    this.filteredEntities$ = this.entityCollectionService.filteredEntities$;
    this.loading$ = this.entityCollectionService.loading$;
    this.loaded$ = this.entityCollectionService.loaded$;
    this.lookups$ = this.appEntityServices.lookups$;

    this.itemMode$ = this.appSelectors.itemMode$();
    this.listMode$ = this.appSelectors.listMode$();

    const displayedColumns = this.getDisplayedColumns();
    if (displayedColumns) {
      this.displayedColumns = displayedColumns;
    }

    this.appSelectors
      .itemMode$()
      .pipe(map(itemMode => (this.itemMode = itemMode)))
      .subscribe(e => e);
  }

  ngOnInit() {
    this.getLooksups();
    this.getEntities();
  }

  getDialogConfig(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = {
      entity: this.selectedEntity,
      commands: this.commands,
      lookups$: this.lookups$
    };

    return dialogConfig;
  }

  abstract openDialogAndSetCommands(entity: T);

  abstract getDisplayedColumns();
  abstract getLooksups();

  itemModeChange(itemMode: string) {
    this.store.dispatch(new ItemModeUpdated({ itemMode }));
  }
  listModeChange(listMode: string) {
    this.store.dispatch(new ListModeUpdated({ listMode }));
  }

  ngOnDestroy() {}

  close() {
    this.selectedEntity = null;
    this.dialog.closeAll();
  }

  add(entity: T) {
    if (!entity.id) {
      entity.id = this.idGenerator.nextId().toString();
    }
    this.entityCollectionService.add(entity);
  }

  delete(entity: T) {
    this.close();
    this.entityCollectionService.delete(entity);
  }

  select(entity: T) {
    this.selectedEntity = entity;

    if (this.itemMode === 'dialog') {
      this.dialogConfig = this.getDialogConfig();
      this.openDialogAndSetCommands(this.selectedEntity);
    }
    if (this.itemMode === 'modal') {
      (<any>this.itemEntityModal).show();
    }
  }

  update(entity: T) {
    this.entityCollectionService.update(entity);
  }

  enableAddMode() {
    this.selectedEntity = <any>{};

    if (this.itemMode === 'dialog') {
      this.dialogConfig = this.getDialogConfig();
      this.openDialogAndSetCommands(this.selectedEntity);
    }
    if (this.itemMode === 'modal') {
      (<any>this.itemEntityModal).show();
    }
  }

  getEntities() {
    this.entityCollectionService.getAll();
    this.close();
  }

  // openDialogAndSetCommands() {
  //   this.dialogConfig.data = { ...this.dialogConfig.data };

  //   const dialogRef = this.dialog.open(,
  //     this.dialogConfig
  //   );
  // }
}
