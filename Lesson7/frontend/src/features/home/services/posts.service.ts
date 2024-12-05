import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: PostModel[] = [
    {
      avatar: 'profile.png',
      author: 'Rakesh Roshan',
      status: 'verified',
      nickName: 'roshan',
      description: 'Subaru Outback only vehicle to receive good rating in latest round of IIHS side crash test.',
      photo: 'post1.jpg'
    },
    {
      avatar: 'profile.png',
      author: 'Rakesh Roshan',
      status: 'verified',
      nickName: 'roshan',
      description: 'Subaru Outback only vehicle to receive good rating in latest round of IIHS side crash test.',
      photo: 'post1.jpg'
    },
    {
      avatar: 'profile.png',
      author: 'Rakesh Roshan',
      status: 'verified',
      nickName: 'roshan',
      description: 'Subaru Outback only vehicle to receive good rating in latest round of IIHS side crash test.',
      photo: 'post1.jpg'
    }
  ]

  constructor() { }

  getPost(){
    return this.posts
  }
  
  addPost(newPost: PostModel){
    this.posts.push(newPost);
  }
}
