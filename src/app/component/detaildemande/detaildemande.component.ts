import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detaildemande',
  templateUrl: './detaildemande.component.html',
  styleUrls: ['./detaildemande.component.css']
})
export class DetaildemandeComponent implements OnInit {
  demande:any;
  formDemande: FormGroup;
  id = this.activateroot.snapshot.params['id'];
  submitted = false;
  constructor(private formBulder: FormBuilder,private demandeService: DemandeService, private router: Router,private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneDemande();
    this.formDemande = this.formBulder.group({
      
      date_depart: ['', Validators.required],
      date_retour: ['', Validators.required],
      heur_depart: ['', Validators.required],
      heur_retour: ['', Validators.required],
      id_voiture: ['', Validators.required],
      id_client: ['', Validators.required]
    })
  }
  getOneDemande() {
    this.demandeService.getOneDemande(this.id).subscribe(
      (res: any) => {
        this.demande = res;
        console.log("demande", this.demande);
        this.Formvalalues(this.demande)
      }
    )
  }
  get f() { return this.formDemande.controls; }

  updateDemande() {
    this.submitted=true;
    if (this.formDemande.invalid) {
      return;
    }
    else{
    let formData = new FormData();
    formData.append("date_depart", this.formDemande.value.date_depart);
    formData.append("date_retour", this.formDemande.value.date_retour);
    formData.append("heur_depart", this.formDemande.value.heur_depart);
    formData.append("model", this.formDemande.value.model);
    formData.append("heur_retour", this.formDemande.value.heur_retour);
    formData.append("id_voiture", this.formDemande.value.id_voiture);
    formData.append("id_client", this.formDemande.value.id_client);
    this.submitted = true;
    this.demandeService.updateDemande(formData, this.id, this.formDemande.value.id_voiture, this.formDemande.value.id_client).subscribe(
      (res: any) => {
        console.log("voiture ", res)
        Swal.fire(
          'add new voiture',
          'success'
        )
        this.getOneDemande();
      }
    )
    }
  }

  Formvalalues(demande: any) {
    this.formDemande.patchValue({
      id: demande.id,
      date_depart: demande.date_depart,
      date_retour: demande.date_retour,
      heur_depart: demande.heur_depart,
      heur_retour: demande.heur_retour,
      id_voiture: demande.voiture.id,
      id_client: demande.client.id,
    })
  }
}
