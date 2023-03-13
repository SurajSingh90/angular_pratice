import { Component, OnInit } from '@angular/core';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-cartdashboard',
  templateUrl: './cartdashboard.component.html',
  styleUrls: ['./cartdashboard.component.css']
})
export class CartdashboardComponent implements OnInit {
  cartData : any
   constructor(private service:CartserviceService){}
 
   ngOnInit(): void {
    this.gettotalemply()
  }

  gettotalemply(){
     this.service.totalemply().subscribe((data:any)=>{
      console.log(data)
      this.cartData = data.msg
    })
  }   
}
