import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formCategory: FormGroup;
  submitted = false;
  constructor(private formBulder: FormBuilder, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.formCategory = this.formBulder.group({
     
      title: ['', Validators.required],
      image:['',Validators.required]
    })
  }
  get f() { return this.formCategory.controls; }

  handelFileInput(files:any){
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  
  addcategorys(){
    let formData = new FormData();
    formData.append("title", this.formCategory.value.title);
    formData.append("file", this.fileToUpload[0]);
    this.submitted = true;
    this.categoryService.addCategory(formData).subscribe(
      (res: any) => {
        console.log("category ", res)
        Swal.fire(
          'add new category',
          'success'
        )
      }
    )
  }

}
