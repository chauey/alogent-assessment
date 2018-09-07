import { Injectable } from "@angular/core";
import { EntityServicesElements, EntityServicesBase } from "ngrx-data";

import {
  BoardService,
  PostItService
} from "../../core/entity-collection-services";
import { Observable } from "rxjs";
import { createSelector, select } from "@ngrx/store";
import { Board } from "../../models/board";

@Injectable()
export class AppEntityServices extends EntityServicesBase {
  // lookups$: {
  //   codeLanguages$: Observable<CodeLanguage[]>;
  // };
  lookups$: Observable<{ boards: Board[] }>;

  constructor(
    entityServicesElements: EntityServicesElements,
    // Inject custom services, register them with the EntityServices, and expose in API.
    public readonly boardService: BoardService,
    public readonly postItService: PostItService
  ) {
    super(entityServicesElements);
    this.registerEntityCollectionServices([boardService, postItService]);

    this.lookups$ = this.store.pipe(
      select(
        createSelector(
          this.boardService.selectors.selectEntities,
          // this.templateSetService.selectors.selectEntities,
          boards => {
            return { boards };
          }
        )
      )
    );
  }

  // ... Additional convenience members

  getAllLooksups() {
    this.boardService.getAll();
    // too many: this.templatesService.getAll();
    // too many?: this.templateSetsService.getAll();
  }
  clearAllLookups() {}
  refreshAllLookups() {
    this.clearAllLookups();
    this.getAllLooksups();
  }
}
