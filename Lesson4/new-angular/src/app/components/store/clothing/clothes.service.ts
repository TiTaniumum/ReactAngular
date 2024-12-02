import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  constructor() { }
  
  getClothes():{name: string, link: string, description: string}[]{
    return [
      {
        name: 'royal clothes',
        link: 'https://static.fandomspot.com/images/04/31388/10-armor-and-clothing-extension-skyrim-mod.jpg',
        description: 'this is really fine clothes'
      }
    ]
  }
}
