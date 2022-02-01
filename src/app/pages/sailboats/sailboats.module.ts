import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { SailboatsRoutingModule } from './sailboats-routing.module';
import { SailboatsComponent } from './sailboats.component';
import { SailboatsDetailComponent } from './components/sailboats-detail/sailboats-detail.component';


@NgModule({
  declarations: [
    SailboatsComponent,
    SailboatsComponent,
    SailboatsDetailComponent
  ],
  imports: [
    CommonModule,
    SailboatsRoutingModule,
    HttpClientModule,
  ]
})
export class SailboatsModule { }
