import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {
  fileToUpload: Array<File> = [];
  category: any;
  formCategory: FormGroup;
  id = this.activateroot.snapshot.params['id']
  submitted = false;
  constructor(private formBulder: FormBuilder, private categoryService: CategoryService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
    this.formCategory = this.formBulder.group({
     
      title: ['', Validators.required],
      image: ['', Validators.required]
    })
  }
  get f() { return this.formCategory.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  getCategory() {
    this.categoryService.getOneCategory(this.id).subscribe(
      (res: any) => {
        this.category = res;
        console.log("category", this.category);
        this.Formvalalues(this.category)
      }
    )
  }

  updateCategory() {
    let formData = new FormData();
    formData.append("title", this.formCategory.value.title);
    formData.append("file", this.fileToUpload[0]);
    this.submitted = true;
    this.categoryService.updateCategory(formData, this.id).subscribe(
      (res: any) => {
        console.log(res);

        Swal.fire(
          'update category',
          'success'
        )
        this.getCategory();

      }

    )
  }

  Formvalalues(marque: any) {
    this.formCategory.patchValue({
      id: marque.id,
      title: marque.title,
      image: (this.fileToUpload[0])
    })
  }

}
