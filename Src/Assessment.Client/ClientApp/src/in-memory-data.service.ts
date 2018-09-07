/**
 * Hero-oriented InMemoryDbService with method overrides.
 */
import { Injectable } from '@angular/core';

import {
  RequestInfo,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

// make sure file encoding is UTF-8, not UTF-8 with BOM
// import * as boardsData from "../Boards.json";
// import * as postItsData from './app/core/data/odata-Templates.json';

/** In-memory database data */
interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService {
  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;
  maxId = 0;

  /** In-memory database data */
  db: Db = {};

  constructor() {
    // http: HttpClient) {
    // http.get('./assets/odata-CodeLanguages.json').subscribe(
    //   result => console.log(result)
    // );
  }

  /** Create the in-memory database on start or by command */
  createDb(reqInfo?: RequestInfo) {
    this.db = getDbData();

    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        // tslint:disable-next-line:forin
        for (const coll in this.db) {
          this.db[coll].length = 0;
        }
      }

      this.active = !!body.active;
    }
    return this.db;
  }

  /**
   * Simulate generating new Id on the server
   * All collections in this db have numeric ids.
   * Seed grows by highest id seen in any of the collections.
   */
  genId(collection: { id: number }[], collectionName: string) {
    this.maxId =
      1 +
      collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }

  /**
   * Override `parseRequestUrl`
   * Manipulates the request URL or the parsed result.
   * If in-mem is inactive, clear collectionName so that service passes request thru.
   * If in-mem is active, after parsing with the default parser,
   * @param url from request URL
   * @param utils for manipulating parsed URL
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const parsed = utils.parseRequestUrl(url);
    parsed.collectionName = this.active
      ? mapCollectionName(parsed.collectionName)
      : undefined;
    return parsed;
  }
}

/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed URL
 */
function mapCollectionName(name: string): string {
  return (
    ({
      boards: 'boards',
      postIts: 'postIts'
    } as any)[name] || name
  );
}

/**
 * Development data
 */
function getDbData() {
  // and then using them as:
  // console.log(codeLanguageData)

  // const tickets: any[] = [
  //   {
  //     id: 0,
  //     description: 'Install a monitor arm',
  //     assigneeId: 111,
  //     completed: false
  //   },
  //   {
  //     id: 1,
  //     description: 'Move the desk to the new location',
  //     assigneeId: 111,
  //     completed: false
  //   }
  // ];

  // const users: any[] = [{ id: 111, name: 'Victor' }];

  // const templates: any[] = [
  //   {
  //     id: 1,
  //     description: 'Install a monitor arm',
  //     name: 'template 1',
  //     content: 'hello {{settings}} typescript',
  //     codeLanguageId: 1
  //   },
  //   {
  //     id: 2,
  //     description: 'Install a monitor arm',
  //     name: 'template 2',
  //     content: 'hello {{settings}} html',
  //     codeLanguageId: 2

  //   },
  //   {
  //     id: 3,
  //     description: 'Install a monitor arm',
  //     name: 'template 3',
  //     content: 'hello {{settings}}'
  //   },
  //   {
  //     id: 4,
  //     description: 'Install a monitor arm',
  //     name: 'template 4',
  //     content: 'hello {{settings}}'
  //   },
  //   {
  //     id: 5,
  //     description: 'Install a monitor arm',
  //     name: 'template 5',
  //     content: 'hello {{settings}}'
  //   },
  //   {
  //     id: 6,
  //     description: 'Install a monitor arm',
  //     name: 'template 6',
  //     content: 'hello {{settings}}'
  //   }
  // ];

  // const templateSets: any[] = [
  //   {
  //     id: 1,
  //     description: 'Angular 6 Material Design Bootstrap',
  //     name: 'Angular 6 Material Design Bootstrap',
  //   },
  //   {
  //     id: 2,
  //     description: 'Angular 6 ngrx-data Material Design Bootstrap',
  //     name: 'Angular 6 ngrx-data Material Design Bootstrap',
  //   },
  //   {
  //     id: 3,
  //     description: 'Angular 6 Bootstrap',
  //     name: 'Angular 6 Bootstrap',
  //   },
  //   {
  //     id: 4,
  //     description: 'Ionic 4',
  //     name: 'Ionic 4',
  //   },
  //   {
  //     id: 5,
  //     description: 'Angular 6 Kendo',
  //     name: 'Angular 6 Kendo',
  //   },
  //   {
  //     id: 6,
  //     description: 'React',
  //     name: 'React',
  //   }
  // ];

  // const templateSetTemplates: any[] = [
  //   {
  //     id: 1,
  //     templateSetId: 1,
  //     templateId: 1,
  //   },
  //   {
  //     id: 1,
  //     templateSetId: 1,
  //     templateId: 2,
  //   }
  // ];

  // const codeLanguages: any[] = [
  //   {
  //     id: 1,
  //     name: 'TypeScript',
  //     vsCode: 'ts',
  //   },
  //   {
  //     id: 2,
  //     name: 'HTML',
  //     vsCode: 'html',
  //   }
  // ];

  const boards = [
    { id: 1, createdAt: '2018-04-12T20:10:28.3910465-04:00', name: 'Board #1' },
    { id: 2, createdAt: '2018-04-17T20:10:28.3939263-04:00', name: 'Board #2' },
    { id: 3, createdAt: '2018-04-18T20:10:28.3939278-04:00', name: 'Board #3' }
  ]; // boardsData;

  const postIts = []; // postItsData;

  // const lala = require('./app/core/data/odata-CodeLanguages.json');

  return {
    boards,
    postIts
  } as Db;
}
