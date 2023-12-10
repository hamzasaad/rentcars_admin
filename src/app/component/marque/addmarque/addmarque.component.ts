import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmarque',
  templateUrl: './addmarque.component.html',
  styleUrls: ['./addmarque.component.css']
})
export class AddmarqueComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formMarque: FormGroup;
  submitted = false;
  constructor(private formBulder: FormBuilder, private marqueService: MarqueService, private router: Router) { }

  ngOnInit(): void {
    this.formMarque = this.formBulder.group({

      title: ['', Validators.required],
      image: ['', Validators.required]
    })
  }
  get f() { return this.formMarque.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  addMarque() {
    this.submitted = true;

    if (this.formMarque.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("title", this.formMarque.value.title);
      formData.append("file", this.fileToUpload[0]);
      this.submitted = true;
      this.marqueService.addMarque(formData).subscribe(
        (res: any) => {
          console.log("marque ", res)
          Swal.fire(
            'add new marque',
            'success'
          )
        }
      )
    }
  }
}
