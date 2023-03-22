import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  constructor(private product:ProductsService){
    this.getProduct()
  }
dataSource:any;
  elemenṭ=['Name','Price','Desc','type','Image','action']
  productList:any;
  displayedColumns=this.elemenṭ
  getProduct(){
    this.product.listProduct().subscribe((res)=>{
      console.log(res)
      this.productList=res
      this.dataSource=this.productList
    })
  }
  deleteMsg!:string|undefined

  delete(id:any){
this.product.deleteProduct(id).subscribe((res)=>{
  if(res){
    this.getProduct()
    this.deleteMsg="Product Deleted Successfully";
  }
  setTimeout(()=>{this.deleteMsg=undefined},3000)
})
  }

}
