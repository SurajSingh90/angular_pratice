import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {

  constructor(private http:HttpClient) { }

  addemply(data:any){
    return this.http.post("http://localhost:3500/empcreate",data)
  }
  emplyId(data:any){
    return this.http.post("http://localhost:3500/findbyid",data)
  }

  updateemply(updateId:any,updatedata:any){
    return this.http.post("http://localhost:3500/updateemply/"+updateId,updatedata)
  }
  allemply(){
    return this.http.get("http://localhost:3500/getallemply")
  }

}
