import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  PostIt,
  IdGeneratorService,
  MasterDetailCommands
} from '../../../core';
import { PostItService } from '../../../core/entity-collection-services';
import { ItemDialogComponentBase } from '../../../core/entity-components/item-dialog-component-base';

@Component({
  selector: 'post-it-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class PostItItemDialogComponent extends ItemDialogComponentBase<PostIt> {
  // vm: { entity: PostIt; codeLanguages: CodeLanguage[]; };

  @ViewChild('text')
  nameElement: ElementRef;

  constructor(
    protected fb: FormBuilder,
    protected dialogRef: MatDialogRef<PostItItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    protected data: {
      entity: PostIt,
      commands: MasterDetailCommands<PostIt>,
      lookups?: any,
      boardId?: number
    }
  ) {
    super(fb, dialogRef, data);
  }

  getForm() {
    return this.fb.group({
      id: [],
      boardId: [this.data.boardId, Validators.required],
      text: ['', Validators.required],
      // createdAt: [new Date(), Validators.required]
    });
  }

  getFocusElement() {
    return this.nameElement;
  }
}
