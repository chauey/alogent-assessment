import { Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemComponentBase } from './item-component-base';
import { MasterDetailCommands } from '..';

export abstract class ItemDialogComponentBase<
  T extends { id: any }
> extends ItemComponentBase<T> implements OnInit {
  @ViewChild('name')
  nameElement: ElementRef;

  constructor(
    protected fb: FormBuilder,
    protected dialogRef: MatDialogRef<ItemDialogComponentBase<T>>,
    // @Inject(MAT_DIALOG_DATA)
    protected data: {
      entity: T,
      commands: MasterDetailCommands<T>,
      lookups?: any,
      boardId?: number

    }
  ) {
    super(fb);

    if (data && data.entity) {
      this.entity = data.entity;
    }
    if (data && data.commands) {
      this.commands = data.commands;
    }
  }

}
