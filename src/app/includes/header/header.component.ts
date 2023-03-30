import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  
  constructor(private router: Router, private product: ProductsService) {}

  sellerMenu: string = 'default';
  cartLength!:number;
  username!:String;
  sellerName: string = '';
  search: undefined | string;
  searchList:any;

  value: any;
  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (
          res.url.includes('seller') && localStorage.getItem('sellerSession')
        ) {
          this.sellerMenu = 'seller';

          if (localStorage.getItem('sellerSession')) {
            let sellerData = localStorage.getItem('sellerSession');
            let sellerN = sellerData && JSON.parse(sellerData);
            console.log(sellerN);
            this.sellerName = sellerN.name;
            // console.log(this.sellerName);
          } else {
            console.log('abcdddsdfsdsfv');
          }
        } else {
          this.sellerMenu = 'default';
        }
      }
    });
    this.router.events.subscribe((res:any)=>{
      console.log(res.url)
      if(res.url){
        if( localStorage.getItem('user')){
            this.sellerMenu='user';
            if(localStorage.getItem('user')){
              let u=localStorage.getItem('user')
              let un=u && JSON.parse(u)[0]
              // console.log(un)
              this.username=un.name
              console.log("username",this.username)
            }
        }

      }
    })

    let cartdata:any=localStorage.getItem('cart');
    let cartItems=JSON.parse(cartdata);
    this.cartLength=cartItems.length
    this.product.cartL.subscribe((res:any)=>{
    this.cartLength=res.length
    })

    

  }
  ngOnChange():void{
  

  }

  logoutUser(){
    localStorage.removeItem('user')
    this.router.navigate(['/']);
    
  }
  logout() {
    localStorage.removeItem('sellerSession');
    this.router.navigate(['/']);
  }
  searchFn() {
    this.product.search(this.search).subscribe((res) => {
      // console.log(res);
      this.searchList=res
      if(this.searchList.length>5)
      {
      this.searchList.length=5
      }
      if(this.searchList.length==0){
        this.searchList=undefined
      }
    
    });
  }
  emptySearch(){
    this.searchList=undefined
  }
  searchPage(search:string){
    console.log(search)
    this.router.navigate([`search/${search}`])
  }
}
