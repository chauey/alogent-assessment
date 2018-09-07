import { Component, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ListComponentBase } from '../../../core/entity-components/list-component-base';
import { PostIt  } from '../../../core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'ncg-post-it-list-mat-table',
  templateUrl: './list-mat-table.component.html',
  styleUrls: ['./list-mat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItListMatTableComponent extends ListComponentBase<PostIt> {

  dataSource: MatTableDataSource<PostIt>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @Input() codeLanguages: CodeLanguage[];
  @Input() lookups: {
    // codeLanguages: CodeLanguage[]
  };

  constructor(dialog: MatDialog) {
    super(dialog);
  }

  getCodeLanguageName(id: number) {
    this.getLookupDisplay('codeLanguages', id, 'name');
    // if (this.lookupLists.codeLanguages) {
    //   const codeLanguage = this.lookupLists.codeLanguages.find(e => e.id === id);
    //   if (codeLanguage) {
    //     return codeLanguage.name;
    //   }
    // }
    // return null;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
