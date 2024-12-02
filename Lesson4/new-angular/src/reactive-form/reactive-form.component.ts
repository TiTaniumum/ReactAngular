import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  submited = false;

  myForm: FormGroup = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(5)]),
    numberInput: new FormControl(1, [Validators.min(1), Validators.max(100)]),
    emailInput: new FormControl('', [Validators.email])
  });

  onSubmit(){
    console.log(this.myForm.getRawValue())
    this.submited = true;
    if(this.myForm.invalid){
      console.log("form is invalid")
      return
    }
    console.log(this.myForm.value)
  }
}
