import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { defaultPost, PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',  
})
export class PostComponent implements OnChanges, OnDestroy{
  ngOnDestroy(): void {
    console.log('Post component is destroyed');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() post: PostModel = defaultPost();
}
