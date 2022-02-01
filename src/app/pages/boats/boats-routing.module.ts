import { BoatsDetailComponent } from './components/boats-detail/boats-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatsComponent } from './boats.component';

const routes: Routes = [
  {path: "", component: BoatsComponent},
  {path: ":idBoats", component: BoatsDetailComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatsRoutingModule { }
