import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { signup } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerSignedIn=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }


  signUp(body:any){

    this.http.post(`http://localhost:3000/sellerData`,body).subscribe((res)=>{
      console.log(res)
      if(res){
          localStorage.setItem("sellerSession",JSON.stringify(res))
          this.isSellerSignedIn.next(true)
          this.router.navigate(['seller-home'])
        }
      })
    }
    
    
    reloadSeller(){
      if(localStorage.getItem('sellerSession')){
        this.isSellerSignedIn.next(true)
        this.router.navigate(['seller-home'])
      }
    }
    
    LogIn(body:any){
      this.http.get(`http://localhost:3000/sellerData?emailId=${body.emailId}&password=${body.password}`).subscribe((res:any)=>{
        console.log(res)
        if(res.length){
          localStorage.setItem("sellerSession",JSON.stringify(res))
          this.isSellerSignedIn.next(true);
          this.router.navigate(['seller-home'])
        }
      })
    }

    


}
