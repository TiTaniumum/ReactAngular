import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  hello: string = "Hello world!";
  name: string = 'Temirlan';
  showBlock: boolean = false;

  constructor(){
    console.log(this.getName());

    setTimeout(()=>{
      this.showBlock = true;
    }, 2000)
  }

  getName(): string {
    return this.name;
  }

  onClickButton(){
    console.log('hello-world clicked')
  }
}
