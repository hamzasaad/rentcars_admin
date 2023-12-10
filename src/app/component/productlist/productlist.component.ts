import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  product: any;
  p: number = 1;
  constructor( private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllVoitures()
  }
  getAllVoitures() {
    this.productService.getProducts().subscribe(
      (res: any) => {
        this.product = res;
        console.log("product", this.product);
      }
    )
  }

  deleteVoitures(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllVoitures()
          })

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

      }

    }

    )

  }

}
