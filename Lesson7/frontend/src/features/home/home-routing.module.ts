import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path:'main', component: MainComponent, children:[
    {path: 'posts', component: PostsComponent}
  ]},
  {path:'', redirectTo:'main', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
