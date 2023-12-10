import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryproductService } from 'src/app/services/categoryproduct.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategoryproduct',
  templateUrl: './addcategoryproduct.component.html',
  styleUrls: ['./addcategoryproduct.component.css']
})
export class AddcategoryproductComponent implements OnInit {
  formCategorypro: FormGroup;
  submitted = false;
  title: any;
  constructor(private formBulder: FormBuilder, private categoryproductService: CategoryproductService, private router: Router) { }

  ngOnInit(): void {
    this.formCategorypro = this.formBulder.group({
      title: ['', Validators.required]
    })
  }
  get f() { return this.formCategorypro.controls; }

  submit() {
    this.submitted = true;
    console.log(this.formCategorypro.valid)
    // stop here if form is invalid
    if (this.formCategorypro.valid) {
      Swal.fire('error');
      return;

    } else (

      this.Addcategoryproduct()
    )

  }
  Addcategoryproduct() {
    this.submitted = true;
    if (this.formCategorypro.invalid) {
      return;
    } else {
      this.categoryproductService.addCategorypro(this.formCategorypro.value).subscribe(
        (res: any) => {
          console.log("category ", res)
          Swal.fire(
            'add new category',
            'success'
          )
        }
      )
    }

    this.submitted = false;
  }

}


