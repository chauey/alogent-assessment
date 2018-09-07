import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FilterObserver } from '../shared/filter';

@Component({
  selector: 'crud-container-header',
  templateUrl: './crud-container-header.component.html'
})
export class CrudContainerHeaderComponent {
  @Output()
  getEntities = new EventEmitter();
  @Output()
  enableAddMode = new EventEmitter();

  @Input()
  filterObserver: FilterObserver;
  @Input()
  selectedEntity: any;
  @Input()
  itemMode: string;
  @Input()
  listMode: string;
  @Output()
  itemModeChange = new EventEmitter();
  @Output()
  listModeChange = new EventEmitter();

  refresh() {
    this.getEntities.emit();
  }
  add() {
    this.enableAddMode.emit();
  }

  changeItemMode(itemMode: string) {
    this.itemModeChange.emit(itemMode);
  }
  changeListMode(listMode: string) {
    this.listModeChange.emit(listMode);
  }
}
