import { Component } from '@angular/core';
import { PipeModule } from './pipe.module';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: false,
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  timeDate: Date = new Date();
  text: string = 'hello world!';
  arrayOfObj = [
    {name:'John', age: 40},
    {name:'John', age: 40}
  ]
  arrayOfObj$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(){
    this.arrayOfObj$.next(this.arrayOfObj);
  }

  // getUsers(){
  //   this.api.get('users', (user)=>{
  //     this.arrayOfObj$.next(user);
  //   })
  //   this.arrayOfObj$.next(user);
  // }
}
