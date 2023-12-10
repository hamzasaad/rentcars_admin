import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  product: any;
  formProduct: FormGroup;
  id = this.activateroot.snapshot.params['id']
  categorypro: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private categoryproductService: CategoryproductService, private productService: ProductService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategorypro();
    this.getOneProduct();
    this.formProduct = this.formBulder.group({
      
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      id_categoryproduct : ['', Validators.required],
    })
  }
  
  get f() { return this.formProduct.controls; }
  getCategorypro() {
    this.categoryproductService.getCateagorypro().subscribe(
      (res: any) => {
        this.categorypro = res;
        console.log("category product", this.categorypro);
      }
    )
  }
  getOneProduct() {
    this.productService.getOneProduct(this.id).subscribe(
      (res: any) => {
        this.product = res;
        console.log("product", this.product);
        this.Formvalalues(this.product)
      }
    )
  }

  updateProduct() {
    this.submitted=true;
    
    if (this.formProduct.invalid) {
      return;
    } else {
    let formData = new FormData();
    formData.append("name", this.formProduct.value.name);
    formData.append("description", this.formProduct.value.description);
    formData.append("prix", this.formProduct.value.prix);
    formData.append("id_categoryproduct", this.formProduct.value.id_categoryproduct);
    this.submitted = true;
    this.productService.updateProduct(formData, this.id, this.formProduct.value.id_categoryproduct).subscribe(
      (res: any) => {
        console.log("product ", res)
        Swal.fire(
          'add new product',
          'success'
        )
        this.getOneProduct();
      }
    )
    }
  }

  Formvalalues(product: any) {
    this.formProduct.patchValue({
      id: product.id,
      name: product.name,
      description: product.description,
      prix: product.prix,
      id_categoryproduct: product.id_categoryproduct
    })
  }

}
