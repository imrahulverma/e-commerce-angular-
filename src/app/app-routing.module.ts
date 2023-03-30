import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerGuard } from './guard/seller.guard';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchComponent } from './pages/search/search.component';
import { SellerAddproductComponent } from './pages/seller-addproduct/seller-addproduct.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[SellerGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddproductComponent,
    canActivate:[SellerGuard]
  },
  {
    path:'search/:query',
    component:SearchComponent
  },
  {
    path:'details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'user-auth',
    component:UserAuthComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
