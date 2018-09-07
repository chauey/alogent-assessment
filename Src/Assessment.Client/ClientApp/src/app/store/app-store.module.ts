import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { appConfigReducers, appConfigServices } from './app-config';
import { EntityStoreModule } from './entity/entity-store.module';

import { environment } from '../../environments/environment';
import {
  RouterReducerState,
  routerReducer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils';

export const metaReducers: MetaReducer<any>[] = environment.production
  ? []
  : // [];
    [storeFreeze];

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}
export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot({ ...reducers }, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('appConfig', appConfigReducers),
    EntityStoreModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    })
  ],
  providers: [appConfigServices]
})
export class AppStoreModule {}
