import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getSignUp(data){
    return this.http.post('http://localhost:3000/api/adduser',data);
  }

  getSignIn(data){
    return (this.http.post('http://localhost:3000/api/checkuser',data));
  }
}
