import { Input, SimpleChanges, ViewChild, OnChanges } from '@angular/core';

import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialogConfig,
  MatDialog
} from '@angular/material';
import { MasterDetailCommands } from '../master-detail-commands';

export abstract class ListComponentBase<T extends { id: number | string }>
  implements OnChanges {
  @Input()
  entities: T[];
  @Input()
  selectedEntity: T;
  @Input()
  lookups: any;
  @Input()
  displayedColumns: string[];
  @Input()
  commands: MasterDetailCommands<T>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource: MatTableDataSource<T>;
  pageSizeOptions = [10, 25, 50, 100, 500, 1000];

  constructor(protected dialog: MatDialog) {}

  byId(entity: T) {
    return entity.id;
  }

  onSelect(entity: T) {
    this.commands.select(entity);
  }

  deleteEntity(entity: T) {
    this.commands.delete(entity);
  }

  addEntity(entity: T) {
    this.commands.add(entity);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.entities) {
      if (!this.dataSource) {
        this.dataSource = new MatTableDataSource(this.entities);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        if (this.dataSource.paginator) {
          this.dataSource.paginator.pageIndex = 0;
        }
        this.dataSource.data = this.entities;
      }
    }
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getLookupDisplay(
    nameOfLookup: string,
    id: number | string,
    nameOfColumn: string = 'name'
  ) {
    if (this.lookups && this.lookups[nameOfLookup]) {
      const lookupItem = this.lookups[nameOfLookup].find(e => e.id === id);
      if (lookupItem) {
        return lookupItem[nameOfColumn];
      }
    }
    return null;
  }
}
