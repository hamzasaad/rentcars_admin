import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addvoiture',
  templateUrl: './addvoiture.component.html',
  styleUrls: ['./addvoiture.component.css']
})
export class AddvoitureComponent implements OnInit {
  fileToUpload: Array<File> = [];
  formVoiture: FormGroup;
  category: any;
  marque: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    this.getCategorys(),
      this.getMarques(),
      this.formVoiture = this.formBulder.group({
      
        name: ['', Validators.required],
        description: ['', Validators.required],
        prix: ['', Validators.required],
        model: ['', Validators.required],
        serie: ['', Validators.required],
        klm: ['', Validators.required],
        couleur: ['', Validators.required],
        nbr_place: ['', Validators.required],
        carburant: ['', Validators.required],
        transmition: ['', Validators.required],
        id_category: ['', Validators.required],
        id_marque: ['', Validators.required],
        img: ['', Validators.required]
      })
  }

  get f() { return this.formVoiture.controls; }

  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  getCategorys() {
    this.voitureService.getCategory().subscribe(
      (res: any) => {
        this.category = res;
        console.log("category", this.category);
      }
    )
  }

  getMarques() {
    this.voitureService.getMarque().subscribe(
      (res: any) => {
        this.marque = res;
        console.log("marque", this.marque);
      }
    )
  }

  onSubmit() {
    this.submitted=true;
    if (this.formVoiture.invalid) {
      return;
    }
    else{
    let formData = new FormData();
    formData.append("name", this.formVoiture.value.name);
    formData.append("description", this.formVoiture.value.description);
    formData.append("prix", this.formVoiture.value.prix);
    formData.append("model", this.formVoiture.value.model);
    formData.append("klm", this.formVoiture.value.klm);
    formData.append("couleur", this.formVoiture.value.couleur);
    formData.append("nbr_place", this.formVoiture.value.nbr_place);
    formData.append("carburant", this.formVoiture.value.carburant);
    formData.append("transmition", this.formVoiture.value.transmition);
    formData.append("id_category", this.formVoiture.value.id_category);
    formData.append("id_marque", this.formVoiture.value.id_marque);
    formData.append("file", this.fileToUpload[0]);       
    this.submitted = true;
    this.voitureService.addVoiture(formData, this.formVoiture.value.id_category, this.formVoiture.value.id_marque).subscribe(
      (res: any) => {
        console.log("Voiture added ! ", res)
        Swal.fire(
          'add new Voiture',
          'success'
        )
      }
    )
   }

  }
}
