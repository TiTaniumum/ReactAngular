import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ApiService } from '../services/api.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  name: string = 'Arman'

  constructor(private mainService: MainService, private api: ApiService, private router: Router){
    this.mainService.Greet('Arman');
  }

  ngOnInit(): void {
    this.mainService.Greet('Arman');
    this.getAllUsers();
    this.updateUser(this.name, "new password");
  }
  ngOnDestroy(): void {
    console.log("destroyed")
  }
  ngAfterViewInit(): void {

  }
  getAllUsers(){
    this.api.get('/api/v1/users').subscribe(users=>{console.log(users)})
  }
  updateUser(username: string, password: string){
    this.api.post('/api/v1/users/updateUser', {username, password})
      .pipe(catchError(error=>{throw error;}))
      .subscribe(users=>{console.log(users)});
  }
}
