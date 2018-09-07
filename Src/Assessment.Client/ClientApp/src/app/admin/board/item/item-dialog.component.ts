import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Board, IdGeneratorService, MasterDetailCommands } from '../../../core';
import { BoardService } from '../../../core/entity-collection-services';
import { ItemDialogComponentBase } from '../../../core/entity-components/item-dialog-component-base';

@Component({
  selector: 'board-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class BoardItemDialogComponent extends ItemDialogComponentBase<Board>
{
  // vm: { entity: Board; codeLanguages: CodeLanguage[]; };

  @ViewChild('name') nameElement: ElementRef;

  constructor(
    protected fb: FormBuilder,
    protected dialogRef: MatDialogRef<BoardItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { entity: Board, commands: MasterDetailCommands<Board>, lookups?: any }
  ) {
    super(fb, dialogRef, data);
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
