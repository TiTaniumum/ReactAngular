import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/api.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private apiService: ApiService,
    private router: Router
  ){

  }

  onSubmit(){
    if (this.loginForm.invalid) return;
    this.apiService
      .post('/login', this.loginForm.value)
      .pipe(catchError((err)=>{throw err}))
      .subscribe((user: any)=>{
        this.getUserData(user.username);
        localStorage.setItem('User',user.username);
        this.router.navigate(['/home']);
      })
  }

  getUserData(username:string){
    this.apiService
      .get(`/users/${username}`)
      .subscribe((user:any)=>{
        console.log(user)
      })
  }
}
