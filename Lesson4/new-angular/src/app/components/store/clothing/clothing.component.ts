import { Component } from '@angular/core';
import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-clothing',
  standalone: false,
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.scss'
})
export class ClothingComponent {
  constructor(private clothes: ClothesService){

  }

  getClothes(): {name: string, link: string, description: string}[]{
    return this.clothes.getClothes();
  }
}
