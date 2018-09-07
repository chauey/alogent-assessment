import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Define the paths to the lazily loaded modules
// const lazyPaths = {
//   tickets: './tickets/tickets.module#TicketsModule',
//   users: './users/users.module#UsersModule'
// };

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'notes', loadChildren: './admin/admin.module#AdminModule' },
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
