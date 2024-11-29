import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DramaComponent } from './drama/drama.component';

const routes: Routes = [
  {
    path:'', 
    component:MainComponent, 
    children:[
      {path:'drama', component: DramaComponent}
    ]
  },
  // {path:'classic',},
  // {path:'ecnyclopedia',},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
