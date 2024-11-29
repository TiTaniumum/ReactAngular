import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClothingComponent } from './clothing/clothing.component';

const routes: Routes = [
  {
    path:'', 
    component:MainComponent, 
    children:[
      {path:'clothing', component: ClothingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
