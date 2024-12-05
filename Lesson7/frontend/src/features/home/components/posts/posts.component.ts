import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  constructor(private postsService: PostsService ){

  }

  getPosts(){
    return this.postsService.posts;
  }
  changePost(){
    this.postsService.posts[0].author = 'alksjdflkasjdfkljaskldfjasdjflskdfj'
  }
}
