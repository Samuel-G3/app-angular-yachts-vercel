import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `boats`, loadChildren: () =>
      import('./pages/boats/boats.module').then(m => m.BoatsModule)
  },
  {
    path: `sailboats`, loadChildren: () =>
      import('./pages/sailboats/sailboats.module').then(m => m.SailboatsModule)
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
