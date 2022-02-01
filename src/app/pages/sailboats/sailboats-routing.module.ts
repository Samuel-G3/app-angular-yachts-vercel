import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SailboatsComponent } from './sailboats.component';
import { SailboatsDetailComponent } from './components/sailboats-detail/sailboats-detail.component';

const routes: Routes = [
  {path: "", component: SailboatsComponent},
  {path: ":idSailboats", component: SailboatsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SailboatsRoutingModule { }
