import {
  Input,
  ElementRef,
  SimpleChanges,
  OnInit,
  OnChanges
} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { MasterDetailCommands } from '../master-detail-commands';

export abstract class ItemComponentBase<T extends { id: any }>
  implements OnInit, OnChanges {
  @Input()
  entity: T;
  @Input()
  lookups: any;
  @Input()
  commands: MasterDetailCommands<T>;

  focusElement: ElementRef;

  addMode = false;
  form: FormGroup;

  constructor(protected fb: FormBuilder) {
    // this.form = this.getForm();
  }

  abstract getForm();
  abstract getFocusElement();

  ngOnChanges(changes: SimpleChanges) {
    // TODO: if (changes['entity'] && changes['entity'.currentValue]  patchValue)
    // this.form = this.getForm();
    // this.initForm();
  }

  ngOnInit(): void {
    this.form = this.getForm();
    this.initForm();
  }

  initForm() {
    this.setFocus();
    if (this.entity && this.entity.id) {
      this.form.patchValue({
        ...(this.entity as object)
      });
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  close() {
    this.commands.close();
  }

  saveEntity() {
    const { dirty, valid, value } = this.form;
    if (dirty && valid) {
      const newEntity = { ...(this.entity as object), ...value };
      this.addMode
        ? this.commands.add(newEntity)
        : this.commands.update(newEntity);
    }
    this.close();
  }

  setFocus() {
    this.focusElement = this.getFocusElement();
    if (this.focusElement) {
      this.focusElement.nativeElement.focus();
    }
  }
}
