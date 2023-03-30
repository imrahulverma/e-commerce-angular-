import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './includes/header/header.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { SellerAddproductComponent } from './pages/seller-addproduct/seller-addproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './pages/search/search.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddproductComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    ,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
