import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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
}
