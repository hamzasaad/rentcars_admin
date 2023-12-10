import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helper/mustmatch';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formAdmin: FormGroup;
  submitted = false;

  constructor(private formBulder: FormBuilder, private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.formAdmin = this.formBulder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      image: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.formAdmin.controls; }

  onSubmit() {
    this.submitted=true;
    if (this.formAdmin.invalid) {
      return;
    }
    else {
    let formData = new FormData();
    formData.append("username", this.formAdmin.value.username);
    formData.append("password", this.formAdmin.value.password);
    formData.append("firstName", this.formAdmin.value.firstName);
    formData.append("lastName", this.formAdmin.value.lastName);
    formData.append("file", this.fileToUpload[0]);
    this.authentificationService.registerAdmin(formData).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire(
          'hello',
          'success register welcome Gauto'
        )
      }
    )
    }
    
  }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  registerAdmin() {
    let formData = new FormData();
    formData.append("username", this.formAdmin.value.username);
    formData.append("password", this.formAdmin.value.password);
    formData.append("firstName", this.formAdmin.value.firstName);
    formData.append("lastName", this.formAdmin.value.lastName);
    formData.append("file", this.fileToUpload[0]);
    this.authentificationService.registerAdmin(formData).subscribe(
      (res: any) => {
        console.log("user ", res)
        Swal.fire(
          'hello',
          'success'
        )
      }
    )
  }

}
