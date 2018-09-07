// angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin.component';

const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'board',
        loadChildren: './board/entity.module#BoardModule'
        // children: [
        //   { path: '', component: DefaultTypeAndFormatListComponent },
        //   { path: ':id', component: DefaultTypeAndFormatItemComponent }
        // ]
      },
      {
        path: 'post-it',
        loadChildren: './post-it/entity.module#PostItModule'
      },

      // set the default path here
      {
        path: '',
        redirectTo: 'board'
      }
    ]
  }
];

// export const routing: ModuleWithProviders = RouterModule.forChild(AdminRoutes);
@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)], // , { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

export const routedComponents = [AdminComponent];
