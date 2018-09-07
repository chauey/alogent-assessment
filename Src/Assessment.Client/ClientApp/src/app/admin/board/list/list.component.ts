import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ListComponentBase } from '../../../core/entity-components/list-component-base';
import { Board } from '../../../core';
import { PostIt } from '../../../models/post-it';

@Component({
  selector: 'ncg-board-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardListComponent extends ListComponentBase<Board> {
  constructor() {
    super(null);
  }

}
