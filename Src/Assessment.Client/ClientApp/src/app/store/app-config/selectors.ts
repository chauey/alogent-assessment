import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { App } from '../../core';
import { AppState } from './reducer';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { initialState } from './reducer';

const getAppState = createFeatureSelector<AppState>('appConfig');

// The following selector implementation guards against empty session state
// as happens when replay with redux dev tools
const getDataSource = createSelector(
  getAppState,
  (state: AppState) =>
    state ? state.session.dataSource : initialState.dataSource
);

const getItemMode = createSelector(
  getAppState,
  (state: AppState) => (state ? state.session.itemMode : initialState.itemMode)
);

const getListMode = createSelector(
  getAppState,
  (state: AppState) => (state ? state.session.listMode : initialState.listMode)
);


@Injectable()
export class AppSelectors {
  constructor(private store: Store<AppState>) {}

  dataSource$() {
    return this.store.select(getDataSource).pipe(distinctUntilChanged());
  }

  itemMode$() {
    return this.store.select(getItemMode).pipe(distinctUntilChanged());
  }

  listMode$() {
    return this.store.select(getListMode).pipe(distinctUntilChanged());
  }
}

// also this server-side https://blog.angular-university.io/angular-material-data-table/

// export const selectCodeLanguagePage = (page:PageQuery) => createSelector(
//   selectFilteredCodeLanguages,
//   codeLanguages => {

//     const start = page.pageIndex * page.pageSize,
//           end = start + page.pageSize;

//     return codeLanguages
//             .slice(start, end);
//   }

// );
