import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailservice',
  templateUrl: './detailservice.component.html',
  styleUrls: ['./detailservice.component.css']
})
export class DetailserviceComponent implements OnInit {
  fileToUpload: Array<File> = [];
  service: any;
  formService: FormGroup;
  id = this.activateroot.snapshot.params['id']

  constructor(private formBulder: FormBuilder, private serviceService: ServiceService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getService();
    this.formService = this.formBulder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  getService() {
    this.serviceService.getOneService(this.id).subscribe(
      (res: any) => {
        this.service = res;
        console.log("service", this.service);
        this.Formvalalues(this.service)
      }
    )
  }

  updateService() {
    let formData = new FormData();
    formData.append("title", this.formService.value.title);
    formData.append("description",this.formService.value.description);
    formData.append("file", this.fileToUpload[0]);
    this.serviceService.updateService(formData, this.id).subscribe(
      (res: any) => {
        console.log(res);

        Swal.fire(
          'update Service',
          'success'
        )
        this.getService();

      }

    )
  }

  Formvalalues(service: any) {
    this.formService.patchValue({
      id: service.id,
      title: service.title,
      description:service.description,
      image: (this.fileToUpload[0])
    })
  }

}
