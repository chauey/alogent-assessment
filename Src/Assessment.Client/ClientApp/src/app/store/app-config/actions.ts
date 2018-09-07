import { Action } from '@ngrx/store';

export const TOGGLE_DATASOURCE = 'TOGGLE_DATASOURCE [SESSION] ';
export enum AppActionTypes {
  ItemModeUpdated = '[ItemMode] Updated',
  ListModeUpdated = '[ListMode] Updated',
}

export class ToggleDataSource implements Action {
  readonly type = TOGGLE_DATASOURCE;
  constructor(public readonly payload: string) {}
}

export class ItemModeUpdated implements Action {
  readonly type = AppActionTypes.ItemModeUpdated;
  constructor(public payload: { itemMode: string} ) {}
}
export class ListModeUpdated implements Action {
  readonly type = AppActionTypes.ListModeUpdated;
  constructor(public payload: { listMode: string} ) {}
}

export type All = ToggleDataSource | ItemModeUpdated | ListModeUpdated;
