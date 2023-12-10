import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formMember: FormGroup;
  submitted = false;
  constructor(private formBulder: FormBuilder, private memberService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.formMember = this.formBulder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      fb: ['', Validators.required],
      twitter: ['', Validators.required],
      instagramme: ['', Validators.required],
      linkedin: ['', Validators.required],
      img: ['', Validators.required]
    })
  }
  get f() { return this.formMember.controls; }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  addmember() {
    this.submitted = true;
    if (this.formMember.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("name", this.formMember.value.name);
      formData.append("description", this.formMember.value.description);
      formData.append("fb", this.formMember.value.fb);
      formData.append("twitter", this.formMember.value.twitter);
      formData.append("instagramme", this.formMember.value.instagramme);
      formData.append("linkedin", this.formMember.value.linkedin);
      formData.append("file", this.fileToUpload[0]);
      this.submitted = false;
      this.memberService.addMember(formData).subscribe(
        (res: any) => {
          console.log("Member ", res)
          Swal.fire(
            'add new Member',
            'success'
          )
        }
      )
    }
  }

}
