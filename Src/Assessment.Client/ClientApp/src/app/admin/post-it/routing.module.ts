import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostItContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PostItContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostItRoutingModule {}
