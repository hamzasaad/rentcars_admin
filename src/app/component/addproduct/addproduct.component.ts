import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  fileToUpload: Array<File> = [];
  formProduct: FormGroup;
  categorypro: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private categoryproductService: CategoryproductService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCategorypro(),
      this.formProduct = this.formBulder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        prix: ['', Validators.required],
        id_categoryproduct: ['', Validators.required],
        image: ['', Validators.required]
      })
  }

  get f() { return this.formProduct.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  getAllCategorypro() {
    this.categoryproductService.getCateagorypro().subscribe(
      (res: any) => {
        this.categorypro = res;
        console.log("category product", this.categorypro);
      }
    )
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formProduct.invalid) {
      return;
    }

    // display form values on success
    let formData = new FormData();
    formData.append("name", this.formProduct.value.name);
    formData.append("description", this.formProduct.value.description);
    formData.append("prix", this.formProduct.value.prix);
    formData.append("id_categoryproduct", this.formProduct.value.id_categoryproduct);
    formData.append("file", this.fileToUpload[0]);
    this.productService.addProduct(formData, this.formProduct.value.id_categoryproduct).subscribe(
      (res: any) => {
        console.log("product ", res)
        Swal.fire(
          'add new product',
          'success'
        )
      }
    )
  }
  Addproduct() {
    this.submitted = true;
    if (this.formProduct.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("name", this.formProduct.value.name);
      formData.append("description", this.formProduct.value.description);
      formData.append("prix", this.formProduct.value.prix);
      formData.append("id_categoryproduct", this.formProduct.value.id_categoryproduct);
      formData.append("file", this.fileToUpload[0]);
      this.productService.addProduct(formData, this.formProduct.value.id_categoryproduct).subscribe(
        (res: any) => {
          console.log("product ", res)
          Swal.fire(
            'add new product',
            'success'
          )
        }
      )

    }

  }
}
