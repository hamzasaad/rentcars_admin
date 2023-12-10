import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailmember',
  templateUrl: './detailmember.component.html',
  styleUrls: ['./detailmember.component.css']
})
export class DetailmemberComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formMember: FormGroup;
  id = this.activateroot.snapshot.params['id']
  member: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private memberService: MembersService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneMember();
    this.formMember = this.formBulder.group({

      name: ['', Validators.required],
      description: ['', Validators.required],
      fb: ['', Validators.required],
      twitter: ['', Validators.required],
      instagramme: ['', Validators.required],
      linkedin: ['', Validators.required],
      image: ['', Validators.required]
    })
  }
  get f() { return this.formMember.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  getOneMember() {
    this.memberService.getOneMembers(this.id).subscribe(
      (res: any) => {
        this.member = res;
        console.log("member", this.member);
      }
    )
  }

  updateMember() {
    this.submitted = true;
    if (this.formMember.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("name", this.formMember.value.name);
      formData.append("description", this.formMember.value.description);
      formData.append("fb", this.formMember.value.prix);
      formData.append("twitter", this.formMember.value.prix);
      formData.append("instagramme", this.formMember.value.prix);
      formData.append("linkedin", this.formMember.value.prix);
      formData.append("file", this.fileToUpload[0]);
      this.submitted = false;
      this.memberService.updateMember(formData, this.id).subscribe(
        (res: any) => {
          console.log(res);

          Swal.fire(
            'update member',
            'success'
          )
          this.getOneMember();

        }

      )
    }
  }

  Formvalalues(member: any) {
    this.formMember.patchValue({
      id: member.id,
      name: member.name,
      description: member.description,
      fb: member.fb,
      twitter: member.twitter,
      instagramme: member.instagramme,
      linkedin: member.linkedin,
      image: (this.fileToUpload[0])
    })
  }
}
