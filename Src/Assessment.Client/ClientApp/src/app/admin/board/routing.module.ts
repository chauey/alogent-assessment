import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BoardContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {}
