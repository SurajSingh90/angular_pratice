import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myfrom = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required]),
    gmail: new FormControl('', [Validators.required])
  })

  get cf(){
    return this.myfrom.controls
  }
  submit(){
    if(this.myfrom.valid){
      console.log(this.myfrom.value)
    }
    else{
      console.log("not valid")
    }
  }
  ngOnInit(): void {
    
  }
  constructor(private service:LoginserviceService, private router:Router){}
  loginpage(){
    let datastore = this.myfrom.value
    this.service.loginpage(datastore).subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['/dashemply'])
    })
     
  }

}
