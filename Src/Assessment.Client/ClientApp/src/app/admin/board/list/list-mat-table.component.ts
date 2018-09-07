import { Component, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ListComponentBase } from '../../../core/entity-components/list-component-base';
import { Board  } from '../../../core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'ncg-board-list-mat-table',
  templateUrl: './list-mat-table.component.html',
  styleUrls: ['./list-mat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardListMatTableComponent extends ListComponentBase<Board> {

  dataSource: MatTableDataSource<Board>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() lookups: {
  };

  constructor(dialog: MatDialog) {
    super(dialog);
  }

}
