import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  get(url: string, body?: any){
    return this.http.get(url,body);
  }
  post(url: string, body?: any){
    return this.http.post(url, body);
  }
}
