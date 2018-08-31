import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';
import { PRODUCTS } from '../../product-mock'

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  constructor() { }

  getProducts(): Product[] {
      return PRODUCTS;
  }

  addProduct(product:Product): void{

  }
}
