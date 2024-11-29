import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { MainComponent } from './main/main.component';
import { DramaComponent } from './drama/drama.component';

@NgModule({
  declarations: [MainComponent, DramaComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
