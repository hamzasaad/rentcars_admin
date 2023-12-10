import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formBlog: FormGroup;
  id = this.activateroot.snapshot.params['id']
  blog: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private blogService: BlogService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneBlog();
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

  getOneBlog() {
    this.blogService.getOneBlog(this.id).subscribe(
      (res: any) => {
        this.blog = res;
        console.log("blog", this.blog);
      }
    )
  }

  updateBlog() {
    this.submitted = true;
    if (this.formBlog.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("title", this.formBlog.value.title);
      formData.append("description", this.formBlog.value.description);
      formData.append("file", this.fileToUpload[0]);
      this.submitted = false;
      this.blogService.updateBlog(formData, this.id).subscribe(
        (res: any) => {
          console.log(res);

          Swal.fire(
            'update Blog',
            'success'
          )
          this.getOneBlog();

        }

      )
    }
  }

  Formvalalues(blog: any) {
    this.formBlog.patchValue({ 
      title: blog.title,
      description: blog.description,
      image: (this.fileToUpload[0])
    })
  }

}
