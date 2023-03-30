import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
cartL:any=new EventEmitter
  constructor(private http:HttpClient,private router:Router) { }

  addproduct(body:any){
  return  this.http.post(`http://localhost:3000/product`,body)
}

listProduct(){
  return  this.http.get(`http://localhost:3000/product`)
  }

  deleteProduct(id:any){
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }

  getProductbyId(id:number){
    return this.http.get(`http://localhost:3000/product/${id}`)
  }

  popularProduct(){
    return this.http.get(`http://localhost:3000/product?_limit=3`)
  }
  
  mobile(){
    return this.http.get(`http://localhost:3000/product?productType=Mobile&_limit=6`)
  }
  
  books(){
    return this.http.get(`http://localhost:3000/product?productType=Books&_limit=6`)

  }


  search(search:any){
    return this.http.get(`http://localhost:3000/product?q=${search}`)
  }

  addCartWithoutLogin(data:any){
let cartdata=[];
let localcart=localStorage.getItem('cart');
if(!localcart){
  localStorage.setItem('cart',JSON.stringify([data]))
}
else{
  // let a:any=localStorage.getItem('cart')
  console.log("new")
  cartdata=JSON.parse(localcart)
  cartdata.push(data)
  
  
  localStorage.setItem('cart',JSON.stringify(cartdata))
}

this.cartL.emit(cartdata)
  
  }
}
