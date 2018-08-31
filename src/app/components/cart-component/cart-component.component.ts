import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  cartProducts: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  // showProduct(){
  //   console.log("products", this.cartProducts);
  // }

  // addProduct(product: Product): void{
  //   console.log("cart", product);
  //   this.cartProducts.push(product);
  //   console.log("cart", this.cartProducts);
  // };

}
