import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  categorypro: any;
  p: number = 1;
  constructor(private categoryproductService: CategoryproductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCategorypro();
  }

  getAllCategorypro() {
    this.categoryproductService.getCateagorypro().subscribe(
      (res: any) => {
        this.categorypro = res;
        console.log("category product", this.categorypro);
      }
    )
  }

  deleteCategoryproduct(id: any) {
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
        this.categoryproductService.deleteCategorypro(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllCategorypro()
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
