import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formService: FormGroup;
  constructor(private formBulder: FormBuilder, private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formService = this.formBulder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image:['',Validators.required]
    })
  }

  handelFileInput(files:any){
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  addcService(){
    let formData = new FormData();
    formData.append("title", this.formService.value.title);
    formData.append("description",this.formService.value.description);
    formData.append("file", this.fileToUpload[0]);
    this.serviceService.addService(formData).subscribe(
      (res: any) => {
        console.log("service ", res)
        Swal.fire(
          'add new service',
          'success'
        )
      }
    )
  }

}
