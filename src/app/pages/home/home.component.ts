import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProduct:any
  mobile:any;
  books:any;
  mensClothing:any;
  strikedPrice!:number;
  
ngOnInit(): void {

  this.product.popularProduct().subscribe((res)=>{
    console.log(res)
    this.popularProduct=res
  })

  this.product.mobile().subscribe((res)=>{
    console.log(res)
    this.mobile=res
  })

  this.product.books().subscribe((res)=>{
    console.log(res)
    this.books=res
  })

}

constructor(private product:ProductsService){}


}
