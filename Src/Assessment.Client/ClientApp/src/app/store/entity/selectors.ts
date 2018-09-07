import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector, select } from '@ngrx/store';

import { EntityCache, Dictionary } from 'ngrx-data';

const getEntityCache = createFeatureSelector<EntityCache>('entityCache');
const getCodeLanguage = state => state.CodeLanguage;
const getTemplateSet = state => state.TemplateSet;

const getCodeLanguages = createSelector(
  getEntityCache,
  getCodeLanguage,
  (codeLanguage: any) => (codeLanguage.ids.map(id => codeLanguage.entities[id]))
);

const getTemplateSets = createSelector(
  getEntityCache,
  getTemplateSet,
  (state: any) => (state.templateSets.ids.map(id => state.templateSets.entities[id]))
);

const getLookups = createSelector(
  getCodeLanguages,
  getTemplateSets,
  (codeLanguages, templateSets) => {
    return { codeLanguages, templateSets };
  }
);

@Injectable()
export class EntitySelectors {
  constructor(private store: Store<EntityCache>) {}

  lookups$() {
    return this.store.pipe(select(getLookups)); //.pipe(distinctUntilChanged());
  }


}
