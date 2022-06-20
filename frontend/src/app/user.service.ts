import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getSignUp(data){
    return this.http.post('http://localhost:3000/adduser',{"signupdata":data});
  }

  getSignIn(data){
    return this.http.post('http://localhost:3000/checkuser',{"signindata":data});
  }
}
