import { Injectable } from '@angular/core';

import { NcgEntityCollectionServiceBase } from './entity-collection-service-base';
import { EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { Board } from '../model/board';

@Injectable({ providedIn: 'root' })
export class BoardService extends NcgEntityCollectionServiceBase<Board> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Board', serviceElementsFactory);
  }
}
