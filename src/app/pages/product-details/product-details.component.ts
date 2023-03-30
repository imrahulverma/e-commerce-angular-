import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  activeID: any;
  productData: any;
 cartL:any=new BehaviorSubject(null)
 addToCartToggle=false;
  constructor(
    // this.productData.quantity=1;
    private activatedRoute: ActivatedRoute,
    private product: ProductsService
    ) {
    // this.productData.quantity=1;
    this.activatedRoute.params.subscribe((res) => {
      this.activeID = res;
    });
    this.product.getProductbyId(this.activeID.id).subscribe((res) => {
      this.productData = res;
      console.log(res);
    });
  }
  addCart() {
    
    this.productData.quantity=1
    if (!localStorage.getItem('user')) {
     this.product.addCartWithoutLogin(this.productData)
     this.addToCartToggle=true
  }
  }

  ngOnInit(): void {
    let cartdata:any=localStorage.getItem('cart');
    let cartitem=JSON.parse(cartdata);
    for(let c of cartitem){
      if(c.id==this.activeID.id){
      this.addToCartToggle=true
    }
    }
  }
}
