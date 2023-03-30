import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent  implements OnInit{
constructor(private user:UserService){}
  

ngOnInit(): void {
  this.user.blockLoginPage()
}
signUpFormView=false;
signuptoggle(){
this.signUpFormView=true
// this.loginFormView=false
}
// loginFormView=true;
loginToggle(){
  // this.loginFormView=true
  this.signUpFormView=false
}

  userRegisterForm=new FormGroup({
    emailId:new FormControl(),
    password:new FormControl(),
    phno:new FormControl(),
    name:new FormControl()
  })

  userLoginForm=new FormGroup({
    emailId:new FormControl(),
    password:new FormControl(),
   
  })

  signUp():void{
   this.user.userSignup(this.userRegisterForm.value)
  }


  login(){
this.user.userLogin(this.userLoginForm.value.emailId,this.userLoginForm.value.password)
  }
}
