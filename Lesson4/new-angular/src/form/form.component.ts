import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  nameInput: string = '';
  emailInput: string = '';

  onSubmit(formObj:any){
    console.log('name input',this.nameInput);
    console.log('email input',this.emailInput);
    this.greet(this.nameInput);

    console.log(formObj.form.value)
  }

  greet(name:string){
    console.log(`hello ${name}!`)
  }
}
