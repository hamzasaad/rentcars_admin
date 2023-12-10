import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formBlog: FormGroup;
  categorypro: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private blogService: BlogService,  private router: Router) { }

  ngOnInit(): void {
    this.formBlog = this.formBulder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  get f() { return this.formBlog.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  AddBlog() {
    this.submitted = true;
    if (this.formBlog.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("title", this.formBlog.value.title);
      formData.append("description", this.formBlog.value.description);
      formData.append("file", this.fileToUpload[0]);
      this.blogService.addBlog(formData).subscribe(
        (res: any) => {
          console.log("Blog ", res)
          Swal.fire(
            'add new Blog',
            'success'
          )
        }
      )

    }

  }

}
