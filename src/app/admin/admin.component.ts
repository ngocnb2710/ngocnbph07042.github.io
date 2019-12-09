import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { isNgTemplate } from '@angular/compiler'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id);
    });
  }
}
