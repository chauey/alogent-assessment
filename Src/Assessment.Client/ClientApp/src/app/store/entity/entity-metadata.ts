import {
  // defaultSelectId,
  EntityMetadataMap,
  PropsFilterFnFactory
} from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  Board: {
    filterFn: nameFilter, // optional
    sortComparer: sortByName // optional
  },
  PostIt: {
    filterFn: nameFilter, // optional
    sortComparer: sortByName // optional
  }
};

export const pluralNames = {
  // Not needed for data access when set Hero's HttpResourceUrls; see `entity-store.module.ts`.
  // Case matters. Match the case of the entity name.
  // Hero: 'Heroes'
};

// Can't just put the function in the entityMetadata literal
// AOT obliges us to encapsulate the logic in wrapper functions

/** Filter for entities whose name matches the case-insensitive pattern */
export function nameFilter<T extends { name: string }>(
  entities: T[],
  pattern: string
) {
  return PropsFilterFnFactory(['name'])(entities, pattern);
}

export function descriptionFilter<T extends { description: string }>(
  entities: T[],
  pattern: string
) {
  return PropsFilterFnFactory(['description'])(entities, pattern);
}

/** Sort Comparer to sort the entity collection by its name property */
export function sortByName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}

/** Sort Comparer to sort the entity collection by its description property */
export function sortByDesc(a: { description: string }, b: { description: string }): number {
  return a.description.localeCompare(b.description);
}

export function nameAndDescrptionFilter<T extends { name: string; description: string }>(
  entities: T[],
  pattern: string
) {
  return PropsFilterFnFactory(['name', 'description'])(entities, pattern);
}