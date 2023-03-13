import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EdirserviceService } from './edirservice.service';

@Component({
  selector: 'app-editemply',
  templateUrl: './editemply.component.html',
  styleUrls: ['./editemply.component.css']
})
export class EditemplyComponent implements OnInit {
  emplyarray:any=[]
  constructor(private editservice:EdirserviceService,private ActivRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.ActivRoute.params.subscribe((resp:any)=>{
      console.log(resp ,"responce");

      if(resp)
      {
        this.editservice.updateuser(resp).subscribe((data:any)=>{
        console.log(data)
        this.emplyarray = data
        console.log("thiss employe====",this.emplyarray)
        })
      }
    })
  }
  
}
