import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamation:any;
  p: number = 1;
  constructor(private reclamationService: ReclamationService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMessage();
  }
  getAllMessage() {
    this.reclamationService.getReclation().subscribe(
      (res: any) => {
        this.reclamation = res;
        console.log("reclamation", this.reclamation);
      }
    )
  }

  deleteMessage(id: any) {
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
        this.reclamationService.deleteProduct(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllMessage()
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
