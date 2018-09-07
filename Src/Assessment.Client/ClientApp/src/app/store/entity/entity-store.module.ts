import { NgModule } from '@angular/core';

import {
  DefaultDataServiceConfig,
  EntityDataService,
  EntityHttpResourceUrls,
  EntityServices,
  Logger,
  NgrxDataModule,
  Pluralizer
} from 'ngrx-data';

import { isE2E } from '../../core';

import { AppEntityServices } from './app-entity-services';

import { AppPluralizer, AppLogger } from '../app-utils';
import { entityMetadata } from './entity-metadata';
import { PostItDataService } from './post-it-data-service';
import { NgrxDataToastService } from './ngrx-data-toast.service';
import { EntitySelectors } from './selectors';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api', // default root path to the server's web api

  // Optionally specify resource URLS for HTTP calls
  entityHttpResourceUrls: {
    // Case matters. Match the case of the entity name.
    // Hero: {
    //   // You must specify the root as part of the resource URL.
    //   entityResourceUrl: 'api/hero/',
    //   collectionResourceUrl: 'api/heroes/'
    // },
    // Case matters. Match the case of the entity name.
    Board: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: 'api/boards/',
      collectionResourceUrl: 'api/boards/'
    },
    PostIt: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: 'api/postIts/',
      collectionResourceUrl: 'api/postIts/'
    }

  },

  timeout: 3000, // request timeout

  // Simulate latency for demo
  getDelay: isE2E ? 0 : 100,
  saveDelay: isE2E ? 0 : 200
};

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata
    })
  ],
  providers: [
    AppEntityServices,
    { provide: EntityServices, useExisting: AppEntityServices },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: Logger, useClass: AppLogger },
    { provide: Pluralizer, useClass: AppPluralizer },

    // HeroDataService,
    PostItDataService,
    NgrxDataToastService,
    EntitySelectors
  ]
})
export class EntityStoreModule {
  constructor(
    // entityDataService: EntityDataService,
    // // heroDataService: HeroDataService,
    // postItDataService: PostItDataService,
    // // Inject NgrxDataToastService to start it listening
    toastService: NgrxDataToastService
  ) {
    // Register custom EntityDataServices
    // entityDataService.registerService('Hero', heroDataService);
    // entityDataService.registerService('Ticket', ticketDataService);
  }
}
