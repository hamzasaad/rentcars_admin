import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any;
  p: number = 1;
  constructor(private formBulder: FormBuilder, private blogService: BlogService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBlog();
  }
  getAllBlog() {
    this.blogService.getateblog().subscribe(
      (res: any) => {
        this.blog = res;
        console.log("blog", this.blog);
      }
    )
  }

  deleteBlog(id: any) {
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
        this.blogService.deleteblog(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllBlog()
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
