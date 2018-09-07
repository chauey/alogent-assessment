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
import { PostIt, IdGeneratorService } from '../../../core';

@Component({
  selector: 'ncg-post-it-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItItemComponent extends ItemComponentBase<PostIt> {
  @ViewChild('text')
  nameElement: ElementRef;
  @Input() boardId: number;

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    return this.fb.group({
      id: [],
      boardId: [this.boardId, Validators.required],
      text: ['', Validators.required],
      createdAt: [new Date(), Validators.required],
    });
  }

  getFocusElement() {
    return this.nameElement;
  }
}
