import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { BoatsRoutingModule } from './boats-routing.module';
import { BoatsComponent } from './boats.component';

import { BoatsDetailComponent } from './components/boats-detail/boats-detail.component';


@NgModule({
  declarations: [ 
    BoatsComponent, 
    BoatsDetailComponent,
    
  ],
  imports: [
    CommonModule,
    BoatsRoutingModule,
    HttpClientModule,
  ]
})
export class BoatsModule { }
