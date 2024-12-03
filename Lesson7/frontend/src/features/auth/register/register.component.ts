import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/api.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ){

  }

  onSubmit(){
    let isExists = false;
    if (this.registerForm.invalid) return;
    if (this.registerForm.value.password !== this.registerForm.value.passwordConfirm) return;

    this.apiService
      .get(`/users/${this.registerForm.value.username}`)
      .pipe(catchError((err)=>{
        if(err.error.error === 'User not found'){
          this.register();
        }
        throw err;
      }))
      .subscribe((user: any)=>{
        alert("Such username exists! try another.");
      }); 
  }

  register(){
    this.apiService
      .post('/register',{username: this.registerForm.value.username, password: this.registerForm.value.password} )
      .pipe(catchError((err)=>{throw err}))
      .subscribe((user: any)=>{
        alert("Success!");
        this.router.navigate(['/auth/login']);
      })
  }
}
