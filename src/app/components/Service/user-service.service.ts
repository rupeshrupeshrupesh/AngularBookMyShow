import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailBody } from '../forgot-password/forgot-password.component';
import { LoginUserDataModel } from '../login/login.component';
import { User } from '../Models/User';
import { Route } from './envoironmentRout';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   
   url="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  public loginUser(loginUser:LoginUserDataModel):Observable<any>{
    // console.log(te.route+"/usersLogin",loginUser);
  return  this.http.post(this.url+"usersLogin",loginUser);
  }

  public registerUser(user:User):Observable<any>{
    return this.http.post(this.url+"userRegister",user);
  }

  public getOtp(email:EmailBody):Observable<any>{
    return this.http.post(this.url+"sendotp",email);
  }
  updatePassword(user :User):Observable<any>{
    return this.http.put(this.url+"updatePassWord",user);
  }

}
