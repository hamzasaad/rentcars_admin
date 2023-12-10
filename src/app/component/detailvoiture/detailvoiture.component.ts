import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailvoiture',
  templateUrl: './detailvoiture.component.html',
  styleUrls: ['./detailvoiture.component.css']
})
export class DetailvoitureComponent implements OnInit {
  fileToUpload: Array<File> = [];
  voiture: any;
  formVoiture: FormGroup;
  id = this.activateroot.snapshot.params['id']
  marque: any;
  category: any;
  submitted = false;
  constructor(private formBulder: FormBuilder, private voitureService: VoitureService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
    this.getMarque();
    this.getOneVoiture();
    this.formVoiture = this.formBulder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      serie: ['', Validators.required],
      model: ['', Validators.required],
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

  getCategory() {
    this.voitureService.getCategory().subscribe(
      (res: any) => {
        this.category = res;
        console.log("category", this.category);
      }
    )
  }

  getMarque() {
    this.voitureService.getMarque().subscribe(
      (res: any) => {
        this.marque = res;
        console.log("marque", this.marque);
      }
    )
  }


  getOneVoiture() {
    this.voitureService.getOneVoiture(this.id).subscribe(
      (res: any) => {
        this.voiture = res;
        console.log("voitures", this.voiture);
        this.Formvalalues(this.voiture)
      }
    )
  }

  updateVoiture() {
    this.voitureService.updateVoiture(this.formVoiture.value, this.id, this.formVoiture.value.id_category, this.formVoiture.value.id_marque).subscribe(
      (res: any) => {
        console.log(res);

        Swal.fire(
          'update product',
          'success'
        )
        this.getOneVoiture();

      }

    )
  }

  updateVoiture1() {
    this.submitted = true;

    if (this.formVoiture.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("name", this.formVoiture.value.name);
      formData.append("description", this.formVoiture.value.description);
      formData.append("prix", this.formVoiture.value.prix);
      formData.append("model", this.formVoiture.value.model);
      formData.append("klm", this.formVoiture.value.klm);
      formData.append("couleur", this.formVoiture.value.couleur);
      formData.append("nbr_place", this.formVoiture.value.nbr_place);
      formData.append("carburant", this.formVoiture.value.carburant);
      formData.append("disponabiliter", this.formVoiture.value.disponabiliter);
      formData.append("transmition", this.formVoiture.value.transmition);
      formData.append("id_category", this.formVoiture.value.id_category);
      formData.append("id_marque", this.formVoiture.value.id_marque);
      formData.append("file", this.fileToUpload[0]);
      this.submitted = true;
      this.voitureService.updateVoiture2(formData, this.id, this.formVoiture.value.id_category, this.formVoiture.value.id_marque).subscribe(
        (res: any) => {
          console.log("voiture ", res)
          Swal.fire(
            'Update voiture',
            'success'
          )
          this.getOneVoiture();
        }
      )
    }
  }


  Formvalalues(voiture: any) {
    this.formVoiture.patchValue({
      id: voiture.id,
      name: voiture.name,
      description: voiture.description,
      prix: voiture.prix,
      serie: voiture.serie,
      model: voiture.model,
      klm: voiture.klm,
      couleur: voiture.couleur,
      nbr_place: voiture.nbr_place,
      carburant: voiture.carburant,
      transmition: voiture.transmition,
      id_category: voiture.id_category,
      id_marque: voiture.id_marque,
      img: (this.fileToUpload[0])
    })
  }
}
