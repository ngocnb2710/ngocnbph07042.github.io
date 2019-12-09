import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { isNgTemplate } from '@angular/compiler'

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
