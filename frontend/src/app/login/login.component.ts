import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup
    (
      {
      emailId: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
      }
    );
  }

  getSignIn(data){
    this.userservice.getSignIn(data).subscribe(
      {
      next:(res)=>
      { 
        this.router.navigate(['/books/content']);
      },
      error:(err)=>
      {
        console.log("error",err)
        this.router.navigate(['/login']);
        alert("Invalid Credentials")
      }
    })
  }
}
