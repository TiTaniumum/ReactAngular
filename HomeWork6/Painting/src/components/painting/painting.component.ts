import { Component, OnInit } from '@angular/core';
import { CoreService, IPainting } from '../../shared/core.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painting',
  imports: [CommonModule],
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.scss'
})
export class PaintingComponent implements OnInit{
  
  painting: IPainting;
  other: IPainting[];

  constructor(
    private core: CoreService,
    private route: ActivatedRoute
  ){
    this.painting = this.core.default();
    this.other = [];
  }
  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      this.painting = this.core.getPainting(id);
      console.log(id, this.painting);
      this.other = this.core.getPaintingsByAuthor(this.painting.author, this.painting.id);
    });
  }
}
