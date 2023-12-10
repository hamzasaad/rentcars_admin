import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailmarque',
  templateUrl: './detailmarque.component.html',
  styleUrls: ['./detailmarque.component.css']
})
export class DetailmarqueComponent implements OnInit {
  fileToUpload: Array<File> = [];
  marque: any;
  formMarque: FormGroup;
  submitted = false;
  id = this.activateroot.snapshot.params['id']
  constructor(private formBulder: FormBuilder, private marqueService: MarqueService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMarque();
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

  getMarque() {
    this.marqueService.getOneMarque(this.id).subscribe(
      (res: any) => {
        this.marque = res;
        console.log("marque", this.marque);
        this.Formvalalues(this.marque)
      }
    )
  }

  updateMarque() {
    this.submitted = true;
    if (this.formMarque.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("title", this.formMarque.value.title);
      formData.append("file", this.fileToUpload[0]);
      this.submitted = true;
      this.marqueService.updateMarque(formData, this.id).subscribe(
        (res: any) => {
          console.log(res);

          Swal.fire(
            'update Marque',
            'success'
          )
          this.getMarque();

        }

      )
    }
  }

  Formvalalues(marque: any) {
    this.formMarque.patchValue({
      id: marque.id,
      title: marque.title,
      image: (this.fileToUpload[0])
    })
  }
}
