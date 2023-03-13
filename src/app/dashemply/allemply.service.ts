import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllemplyService {

  constructor(private http:HttpClient ) { }
  allemply(){
    return this.http.get("http://localhost:3500/getallemply")
  }
  deletemply(Id:any){
    return this.http.delete("http://localhost:3500/delete/emply/"+Id)
  }
}
