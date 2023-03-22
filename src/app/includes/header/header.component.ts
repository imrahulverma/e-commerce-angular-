import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
constructor(private router:Router){

}

sellerMenu:string='default'

sellerName:string='';

value: any;
ngOnInit(): void {
 
  this.router.events.subscribe((res:any)=>{

    if(res.url){
      if(res.url.includes('seller')&& localStorage.getItem('sellerSession')){
        this.sellerMenu='seller'

        if(localStorage.getItem('sellerSession')){
        let sellerData=localStorage.getItem("sellerSession")
      let sellerN=sellerData && JSON.parse(sellerData)[0]
      console.log(sellerN)
      this.sellerName=sellerN.name;
      console.log(this.sellerName)
    }else{
      console.log("abcdddsdfsdsfv")
    }
        
        
        

      }
      else{
        
        this.sellerMenu='default'
      }
    }

    
  })

  
 
}


logout(){
  localStorage.removeItem('sellerSession')
  this.router.navigate(['/'])
}


}