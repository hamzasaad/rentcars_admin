import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploadcontract',
  templateUrl: './uploadcontract.component.html',
  styleUrls: ['./uploadcontract.component.css']
})
export class UploadcontractComponent implements OnInit {
  result: any
  id = this.activatedRoute.snapshot.params['id']
  formContract: FormGroup;
  fileToUpload: Array<File> = [];
  constructor(private formBulder: FormBuilder,private contractService: ContractService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formContract = this.formBulder.group({
      pdf: ['', Validators.required]
    })
  }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.saveResultConract()
  }

  saveResultConract() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.contractService.saveResult(formData,this.id).subscribe(
      (res: any) => {
        console.log("contract ", res)
        Swal.fire({
          icon:'success',
          text:'Contract saved to admin dashboard :)'

        })
        
      }
    )
  }
}
