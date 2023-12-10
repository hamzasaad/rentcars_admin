import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailcategoryproduct',
  templateUrl: './detailcategoryproduct.component.html',
  styleUrls: ['./detailcategoryproduct.component.css']
})
export class DetailcategoryproductComponent implements OnInit {

  categorypro: any;
  formCategorypro: FormGroup;
  id = this.activateroot.snapshot.params['id']
  submitted = false;
  constructor(private formBulder: FormBuilder, private categoryproductService: CategoryproductService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategorypoduct();
    this.formCategorypro = this.formBulder.group({
      title: ['', Validators.required]
    });
  }
  get f() { return this.formCategorypro.controls; }

  getCategorypoduct() {
    this.categoryproductService.getOneCategorypro(this.id).subscribe(
      (res: any) => {
        this.categorypro = res;
        console.log("category", this.categorypro);
        this.Formvalalues(this.categorypro)
      }
    )
  }

  updateCategory() {
    this.submitted = true;
    this.categoryproductService.updateCategorypro(this.formCategorypro.value, this.id).subscribe(
      (res: any) => {
        console.log(res);

        Swal.fire(
          'update category product',
          'success'
        )
        this.getCategorypoduct();

      }

    )
  }

  Formvalalues(category: any) {
    this.formCategorypro.patchValue({
      id: category.id,
      title: category.title
    })
  }
}
