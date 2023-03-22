import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-addproduct',
  templateUrl: './seller-addproduct.component.html',
  styleUrls: ['./seller-addproduct.component.css']
})
export class SellerAddproductComponent {
constructor(private product:ProductsService,private router:Router)
{}
  addProductForm=new FormGroup({
    productName:new FormControl(),
    productPrice:new FormControl(),
    productDesc:new FormControl(),
    productType:new FormControl(),
    productImageUrl:new FormControl(),
  })

  productAddedMsg!:any
  addProduct(){
   this.product.addproduct(this.addProductForm.value).subscribe((res)=>{
    console.log(res)
    if(res){
      this.productAddedMsg="Product Added Successfully!!!"
      setTimeout(()=>this.productAddedMsg=undefined,3000)
      
      
      // this.router.navigate(['seller-home'])
      this.addProductForm.reset();
  }
  })
  }
}

