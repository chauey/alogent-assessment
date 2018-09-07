import { ActionReducerMap } from '@ngrx/store';

import { App } from '../../core';
import * as AppActions from './actions';
import { RouterReducerState } from '@ngrx/router-store';

export interface SessionState {
  dataSource: string;
  itemMode: string;
  listMode: string;
}


export const initialState: SessionState = {
  dataSource: 'local',
  itemMode: 'dialog',
  listMode: 'table'
};

export interface AppState {
  session: SessionState;
}


export const appConfigReducers: ActionReducerMap<AppState> = {
  session: sessionReducer,

  // here is where i put other reducers, when i have them
};

export function sessionReducer(
  state = initialState,
  action: AppActions.All
): SessionState {
  switch (action.type) {
    case AppActions.TOGGLE_DATASOURCE: {
      // HACK: test freeze
      state.dataSource = 'testFreeze';
      return {
        ...state,
        dataSource: action.payload
      };
    }
    case AppActions.AppActionTypes.ItemModeUpdated: {
      return {
        ...state,
        itemMode: action.payload.itemMode
      };
    }
    case AppActions.AppActionTypes.ListModeUpdated: {
      return {
        ...state,
        listMode: action.payload.listMode
      };
    }
    default:
      return state;
  }
  // return state;
}
