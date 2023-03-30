import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

  userSignup(body:any){
    return this.http.post('http://localhost:3000/user',body).subscribe((res)=>{
      console.log(res)
      if(res){
        localStorage.setItem('user',JSON.stringify(res))
        this.router.navigate(['/'])
      }
    })
  }

  userLogin(email:any,password:any){
    return this.http.get(`http://localhost:3000/user?emailId=${email}&password=${password}`).subscribe((res:any)=>{
      console.log(res)
      if(res){
        localStorage.setItem('user',JSON.stringify(res))
        this.router.navigate(['/'])
      }

    })
  }
  blockLoginPage(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }


}
