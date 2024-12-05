import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    PostsComponent,
    CreatePostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
