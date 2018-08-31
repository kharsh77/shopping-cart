import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';
import { PRODUCTS } from '../../product-mock';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  cartProducts: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
      return PRODUCTS;
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  addCartProduct(product: Product): void {

  }

  removeCartProduct(product: Product): void {}
}
