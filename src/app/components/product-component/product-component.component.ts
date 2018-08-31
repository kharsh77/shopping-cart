import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  products: Product[] = [];
  cartProduct: Product[] = [];

  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productServiceService.getProducts();
  }

  addProduct(product: Product): void {
    const isAdded = this.cartProduct.filter(h => h === product).length === 0;

    if (isAdded) {
      this.cartProduct.push(product);
    }
  }

  removeCartProduct(product: Product): void {
    this.cartProduct = this.cartProduct.filter(h => h !== product);
  }
}
