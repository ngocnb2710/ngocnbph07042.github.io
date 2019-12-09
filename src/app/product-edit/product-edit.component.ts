import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( param => {
      const {id} = param;
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;
      })
    })
  }

  saveProduct(product) {
    this.productService.updateProduct(product).subscribe(data => {
      this.router.navigateByUrl('/admin');
    })
  }
}
