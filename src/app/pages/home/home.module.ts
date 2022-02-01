import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { ImageComponent } from '../../shared/components/image/image.component';

 

@NgModule({
  declarations: [
    HomeComponent, 
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
