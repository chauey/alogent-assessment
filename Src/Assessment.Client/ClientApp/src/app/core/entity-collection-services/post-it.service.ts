import { Injectable } from '@angular/core';

import { NcgEntityCollectionServiceBase } from './entity-collection-service-base';
import { EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { PostIt } from '../model/post-it';

@Injectable({ providedIn: 'root' })
export class PostItService extends NcgEntityCollectionServiceBase<PostIt> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('PostIt', serviceElementsFactory);
  }
}
