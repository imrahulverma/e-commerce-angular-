import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query:any
  productList:any
  constructor(private route:ActivatedRoute,private queryList:ProductsService){
this.route.params.subscribe((res)=>{
  console.log(res)
this.query=res
})



  }
  ngOnInit(){
    this.queryList.search(this.query.query).subscribe((res)=>{
      console.log(res)
      this.productList=res
          })
  }




}
