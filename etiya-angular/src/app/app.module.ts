import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ProductsModule } from './features/products/products.module';
import { CategoriesModule } from './features/categories/categories.module';
import { CustomersModule } from './features/customers/customers.module';
import { OrdersModule } from './features/orders/orders.module';
import { SuppliersModule } from './features/suppliers/suppliers.module';
import { CartModule } from './features/cart/cart.module';
import { StorageModule } from './core/storage/storage.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProductsModule,
    CoreModule,
    SharedModule,
    CategoriesModule,
    CustomersModule,
    OrdersModule,
    SuppliersModule,
    CartModule,
    StorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }