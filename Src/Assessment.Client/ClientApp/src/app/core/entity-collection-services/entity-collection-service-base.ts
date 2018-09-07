import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { FilterObserver } from '../../shared/filter';

export abstract class NcgEntityCollectionServiceBase<T> extends EntityCollectionServiceBase<T> {

  filterObserver: FilterObserver;

  constructor(entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(entityName, serviceElementsFactory);

    this.filterObserver = {
      filter$: this.filter$,
      setFilter: this.setFilter.bind(this)
    };
  }
}
