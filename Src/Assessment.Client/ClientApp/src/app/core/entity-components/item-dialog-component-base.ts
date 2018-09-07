import { Inject, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemComponentBase } from './item-component-base';
import { MasterDetailCommands } from '..';

export abstract class ItemDialogComponentBase<
  T extends { id: any }
> extends ItemComponentBase<T> {
  @ViewChild('name')
  nameElement: ElementRef;

  constructor(
    protected fb: FormBuilder,
    protected dialogRef: MatDialogRef<ItemDialogComponentBase<T>>,
    @Inject(MAT_DIALOG_DATA)
    protected data: {
      entity: T;
      commands: MasterDetailCommands<T>;
      lookups?: any;
    }
  ) {
    super(fb);
    if (data && data.entity) this.entity = data.entity;
    if (data && data.commands) this.commands = data.commands;
    super.initForm();
  }
}
