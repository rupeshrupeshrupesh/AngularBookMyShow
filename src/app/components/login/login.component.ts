import { Component } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import { UserServiceService } from '../Service/user-service.service';
import { Router, withDisabledInitialNavigation } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showLoginForm: boolean = true;

  email: string;

  password: string;

  loginUser=new LoginUserDataModel()
  constructor(private userService: UserServiceService,private router: Router){

  }

  inLogin(){
    this.loginUser.email = this.email;
    this.loginUser.pwd = this.password

    
this.userService.loginUser(this.loginUser).subscribe((data)=>{

  if(data)
  {
    this.router.navigate(['/movies']);
    this.email="";
    this.password="";
  }
}, (error: HttpErrorResponse) => {
  if (error.status === 400) {
    // Handle 400 status code
    console.log('Error 400: Bad Request');
    console.log(error.error); // Log the error response
  } else {
    // Handle other error codes
    console.error('An error occurred:', error.error);
  }
}); 
  }
 


}
export class LoginUserDataModel{
  email:string;
  pwd:string;
}