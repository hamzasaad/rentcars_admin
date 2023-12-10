import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {
  product:any;
  n: number = 1;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getProducts().subscribe(
      (res: any) => {
        this.product = res;
        console.log("voitures", this.product);
      }
    )
  }

}
