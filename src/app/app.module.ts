import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CheckoutComponentComponent } from './components/checkout-component/checkout-component.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    CartComponentComponent,
    CheckoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
