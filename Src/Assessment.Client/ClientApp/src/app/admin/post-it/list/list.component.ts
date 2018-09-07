import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ListComponentBase } from '../../../core/entity-components/list-component-base';
import { PostIt } from '../../../core';

@Component({
  selector: 'ncg-post-it-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItListComponent extends ListComponentBase<PostIt> {

  constructor() {
    super(null);
  }
}
