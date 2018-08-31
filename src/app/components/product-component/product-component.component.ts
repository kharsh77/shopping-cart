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

  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this.products = this.productServiceService.getProducts();
  };

  addproduct(product: Product): void{
  }

}
