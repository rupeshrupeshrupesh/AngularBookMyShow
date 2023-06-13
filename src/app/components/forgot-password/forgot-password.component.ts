import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { UserServiceService } from '../Service/user-service.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private router: Router,private userService:UserServiceService) { }


  showEnterOTP = false;
  emailBody=new EmailBody();
  optNumber:number;
  email:string;
  orignalOtp:number;
  passwordChange:boolean=false;
  password:string;
  confirmPassword:string;
  user=new User();


  sendOTP() {
    this.emailBody.email = this.email;

  this.userService.getOtp(this.emailBody).subscribe((data)=>{
    this.orignalOtp=data;
  })


    this.showEnterOTP = true;
  }

  goToLoginPage(): void {
    this.router.navigate(['/signup']);
  }

  submit(){
    if(this.optNumber===this.orignalOtp)
    {

      this.passwordChange=true;
      console.log(this.passwordChange)
    }
    else{
      this.passwordChange=false;
      console.log(this.passwordChange)

    }
  }
  public updatePassword(){
    this.user.email=this.email;
    this.user.pwd=this.password
this.userService.updatePassword(this.user).subscribe((data)=>{

  })

}
}

export class EmailBody{
  email:string;
}


