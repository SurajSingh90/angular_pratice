import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllemplyService } from './allemply.service';

@Component({
  selector: 'app-dashemply',
  templateUrl: './dashemply.component.html',
  styleUrls: ['./dashemply.component.css']
})
export class DashemplyComponent  {
 
  constructor(private emply:AllemplyService,private router:Router){}
  emplyarray:any=[]
  listemploye(){
    this.emply.allemply().subscribe((data:any)=>{
      // console.log(data)
      this.emplyarray=data
      // this.router.navigate(['/'])
    })
  }
  
  
  // currentItem = 'Television'; 
  emplydata(data:any){
    console.log(data);
    this.emplyarray = data
    this.router.navigate(['update/'+data])
  }
  deleteemply(dataId:any){
    this.emply.deletemply(dataId._id).subscribe((dat:any)=>{
      console.log("emple delte",dat)
      alert("user Delet Successfull")
   
    })
  }
  
}
