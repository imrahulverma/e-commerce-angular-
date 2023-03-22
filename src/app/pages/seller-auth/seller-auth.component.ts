import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { signup } from 'src/app/data-types';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
constructor(private seller:SellerService,private router:Router){

}

ngOnInit(): void{
  this.seller.reloadSeller()
}

signUpFormView=false;
signuptoggle(){
this.signUpFormView=true
this.loginFormView=false
}
loginFormView=true;
loginToggle(){
  this.loginFormView=true
  this.signUpFormView=false
}

  sellerRegisterForm=new FormGroup({
    emailId:new FormControl(),
    password:new FormControl(),
    phno:new FormControl(),
    name:new FormControl()
  })

  sellerLoginForm=new FormGroup({
    emailId:new FormControl(),
    password:new FormControl(),
   
  })

  signUp():void{
   this.seller.signUp(this.sellerRegisterForm.value)
  }


  login(){
this.seller.LogIn(this.sellerLoginForm.value)
  }
}
