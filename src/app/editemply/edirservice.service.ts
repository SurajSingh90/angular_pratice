import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdirserviceService {

  constructor(private htpp:HttpClient) { }
  updateuser(data:any){
    return this.htpp.post("http://localhost:3500/findbyid",data)
  }

}
