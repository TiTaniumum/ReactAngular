import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  Greet(name:string){
    alert(`hello, ${name}`);
  }
}
