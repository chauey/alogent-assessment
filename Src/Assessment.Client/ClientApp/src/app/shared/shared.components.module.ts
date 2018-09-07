import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSnackBarModule
} from '@angular/material';

import { NgSelectModule } from '@ng-select/ng-select';
import { CrudContainerHeaderComponent } from '../admin/crud-container-header.component';
import { FilterComponent } from './filter/filter.component';
import { CrudContainerBaseComponent } from '../admin/crud-container-base.component';

@NgModule({
  declarations: [FilterComponent, CrudContainerHeaderComponent, CrudContainerBaseComponent],
  imports: [
    CommonModule,

    RouterModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,

    NgSelectModule
  ],
  exports: [
    CommonModule,

    RouterModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,

    NgSelectModule,

    FilterComponent,
    CrudContainerHeaderComponent,
    CrudContainerBaseComponent
  ]
})
export class SharedComponentsModule {}
