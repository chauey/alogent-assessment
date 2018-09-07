import {
  Component,
  ElementRef,
  OnChanges,
  ViewChild,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemComponentBase } from '../../../core/entity-components/item-component-base';
import { Board, IdGeneratorService } from '../../../core';

@Component({
  selector: 'ncg-board-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
}) // implements OnChanges
export class BoardItemComponent extends ItemComponentBase<Board> {
  @ViewChild('name')
  nameElement: ElementRef;
  // @Input() codeLanguages: CodeLanguage[];

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    return this.fb.group({
      id: [],
      name: ['', Validators.required],
      createdAt: [new Date(), Validators.required],
    });
  }

  getFocusElement() {
    return this.nameElement;
  }
}
