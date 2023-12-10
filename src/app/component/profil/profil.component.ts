import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  fileToUpload: Array<File> = [];
  formAdmin:FormGroup;
  admin:any;
  formUser:FormGroup;
  constructor(private profileService: ProfilService, private formBulder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getOneAdmint();
    this.formAdmin = this.formBulder.group({
      image: ['', Validators.required]
    })
    this.formUser = this.formBulder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.updateImage();
  }
  updateImage() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.profileService.updateImage(formData, this.userconnect.id).subscribe(
      (res: any) => {
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()
        Swal.fire(
          'Update new image',
          'success'
        )

      }
    )

  }
  getOneAdmint() {
    this.profileService.getOneAdmin(this.userconnect.id).subscribe(
      (res: any) => {
        this.admin = res;
        console.log("admin", this.admin);
        this.Formvalalues(this.admin)
      }
    )
  }

  updateAdmin() {
    this.profileService.updateAdmin(this.formAdmin.value, this.userconnect.id).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire(
          'Update Profil Succes'
        )
      }

    )
  }

  Formvalalues(admin: any) {
    this.formUser.patchValue({
      firstName: admin.firstName,
      lastName: admin.lastName,
      username: admin.username,
    })
  }

}
