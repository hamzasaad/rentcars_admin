import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demande: any;
  p: number = 1;
  constructor( private demandeService: DemandeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDemande();
  }

  getAllDemande() {
    this.demandeService.getDemande().subscribe(
      (res: any) => {
        this.demande = res;
        console.log("demande", this.demande);
      }
    )
  }

  deleteDemande(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.demandeService.deleteDemande(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllDemande()
          })

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

      }

    }

    )

  }

  acceptDemande(id:any) {

    this.demandeService.acceptDemande(id).subscribe(

      (res: any) => {
        console.log("accepted");
        this.getAllDemande()
      })

  }
}
