// Example: creating a custom DataService.
// see EntityStoreModule for providing and registering
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams
} from 'ngrx-data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostIt } from '../../core';

@Injectable()
export class PostItDataService extends DefaultDataService<PostIt> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('PostIt', http, httpUrlGenerator);
    logger.log('Created custom PostIt EntityDataService');
  }

  getAll(): Observable<PostIt[]> {
    return super.getAll()
      .pipe(map(postIts => postIts.map(postIt => this.mapPostIt(postIt))));
  }

  getById(id: string | number): Observable<PostIt> {
    return super.getById(id)
      .pipe(map(postIt => this.mapPostIt(postIt)));
  }

  getWithQuery(params: string | QueryParams): Observable<PostIt[]> {
    return super.getWithQuery(params)
      .pipe(map(postIts => postIts.map(postIt => this.mapPostIt(postIt))));
  }

  /** not needed for postIt now: Add dateLoaded if not already set */
  private mapPostIt(postIt: PostIt): PostIt {
    return postIt; // .dateLoaded ? postIt : { ...postIt, dateLoaded: new Date() };
  }
}
