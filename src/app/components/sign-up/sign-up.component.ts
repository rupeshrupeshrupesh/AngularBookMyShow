import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
// import { HttpResponseError } from "@angular/common/http";
// import { User } from '../Models/Admin';
import { UserServiceService } from '../Service/user-service.service';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  name:string ="";
  mobilenumber:string;
  email:string;
  pwd:string;
  cpwd:string;

  user=new User();


  constructor(private userService: UserServiceService, private router: Router){

  }

  signUp(){
    this.user.email=this.email;
    this.user.pwd=this.pwd;
    this.user.mobile=this.mobilenumber;
    this.user.name=this.name;
this.userService.registerUser(this.user).subscribe((data)=>{
  if(data)
  {
    this.router.navigate(['/login']);
  }

},(error:HttpErrorResponse)=>{

  if(error.status===400)
  {
console.log(error.status);

  }

}
)

  }




}
