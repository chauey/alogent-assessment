import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from './shared/shared.components.module';

import { AppStoreModule } from './store/app-store.module';

import {
  HttpClientInMemoryWebApiModule,
  InMemoryDbService
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { CoreModule } from './core';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CoreModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    SharedComponentsModule,
    AppStoreModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 0,
      passThruUnknownUrl: true
    })
  ],
  providers: [{ provide: InMemoryDataService, useExisting: InMemoryDbService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
