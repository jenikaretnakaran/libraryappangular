import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  form:FormGroup;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(){

    this.form= new FormGroup
    (
      {
      userName:new FormControl("",Validators.required),
      emailId: new FormControl("",Validators.compose([Validators.required,Validators.email])),
      password: new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)]))
      }
    );
  };

 

  onSignup(form){
  return this.userservice.getSignUp(form)
  .subscribe(res=>{
    console.log(res);
    this.router.navigate(['/login'])
  });
  }

}
