import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoriesModule } from '../features/categories/categories.module';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from '../features/cart/cart.module';
import { SharedRoutingModule } from './shared-routing.module';
import { ProductsModule } from '../features/products/products.module';



@NgModule({
  declarations: [ 
    NavbarComponent,    
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,    
    CategoriesModule,
    ProductsModule,
    BrowserModule,
    CartModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }