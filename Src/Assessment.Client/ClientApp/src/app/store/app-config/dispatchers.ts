import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppActions from './actions';
import { AppState } from './reducer';

@Injectable()
export class AppDispatchers {
  constructor(private store: Store<AppState>) {}

  toggleDataSource(location: string) {
    this.store.dispatch(new AppActions.ToggleDataSource(location));
  }

  updateItemMode(itemMode: string) {
    this.store.dispatch(new AppActions.ItemModeUpdated({ itemMode }));
  }

  updateListMode(listMode: string) {
    this.store.dispatch(new AppActions.ListModeUpdated({ listMode }));
  }

}
