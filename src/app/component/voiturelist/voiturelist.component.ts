import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voiturelist',
  templateUrl: './voiturelist.component.html',
  styleUrls: ['./voiturelist.component.css']
})
export class VoiturelistComponent implements OnInit {
  voiture: any;
  p: number = 1;
  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    this.getAllVoitures();
  }

  getAllVoitures() {
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        this.voiture = res;
        console.log("voiture", this.voiture);
      }
    )
  }

  deleteVoitures(id: any) {
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
        this.voitureService.deleteVoiture(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllVoitures()
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

}
