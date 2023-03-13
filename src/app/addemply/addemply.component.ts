import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddserviceService } from './addservice.service';

@Component({
  selector: 'app-addemply',
  templateUrl: './addemply.component.html',
  styleUrls: ['./addemply.component.css']
})
export class AddemplyComponent implements OnInit {
  emplyarray: any;
 
  employerId: any;
  
  registerForm = new FormGroup({ 
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
    gmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),


  })
  constructor(private addservice: AddserviceService, private ActiveRoute: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {

    this.ActiveRoute.params.subscribe((resp: any) => {
      if (resp) {
        this.employerId = resp
        console.log(this.employerId);
        
        this.addservice.emplyId(this.employerId).subscribe((data: any) => {
          console.log(data)
          this.emplyarray = data
          this.getuserDetails()
          
          // console.log("thiss employe====", this.emplyarray)
        })

      }
    })

  }

  getuserDetails() {
    if (this.emplyarray) {
      console.log(this.emplyarray);

      this.registerForm.get('firstname')?.setValue(this.emplyarray[0].firstname)
      this.registerForm.get('lastname')?.setValue(this.emplyarray[0].lastname)
      this.registerForm.get('gmail')?.setValue(this.emplyarray[0].gmail)
      this.registerForm.get('phone')?.setValue(this.emplyarray[0].phone)
      this.registerForm.get('gender')?.setValue(this.emplyarray[0].gender)
      this.registerForm.get('city')?.setValue(this.emplyarray[0].city)
      this.registerForm.get('address')?.setValue(this.emplyarray[0].address)
      this.registerForm.get('nationality')?.setValue(this.emplyarray[0].nationality)
      this.registerForm.get('password')?.setValue(this.emplyarray[0].password)
      this.registerForm.get('confirmpassword')?.setValue(this.emplyarray[0].confirmpassword)
    }

  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
    else {
      console.log("not valid");
    }


  }
 
  
  
 

  submitbutton() {
    let createdata = this.registerForm.value
    this.addservice.addemply(createdata).subscribe((data: any) => {

      // console.log(data)
      alert("Emplye add suceesfull")
      this.router.navigate(['/dashemply'])
    
      
     
    })
  }
  updateEmployer(){
    let updatedata = this.registerForm.value
    this.addservice.updateemply(this.employerId.id,updatedata).subscribe((updateemply:any)=>{
      //  console.log("update details===>>>",updateemply)
      alert("update Successfull")
      this.router.navigate(['/dashemply'])
      }) 
  }


  

}
