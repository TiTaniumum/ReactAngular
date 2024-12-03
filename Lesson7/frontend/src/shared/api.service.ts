import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    
  }

  get(url: string, body?: any){
    return this.http.get(this.apiUrl + url, body);
  }

  post(url: string, body: any){
    return this.http.post(this.apiUrl + url, body);
  }
}
