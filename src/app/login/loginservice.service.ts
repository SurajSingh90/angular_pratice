import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient ) { }
  loginpage(data:any){
    return this.http.post("http://localhost:3500/loginemply",data)
  }
}
