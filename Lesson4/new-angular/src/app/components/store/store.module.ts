import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ClothingComponent } from './clothing/clothing.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent,ClothingComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
