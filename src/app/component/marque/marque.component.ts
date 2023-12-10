import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import { MembersService } from 'src/app/services/members.service';
import Swal from 'sweetalert2';
import { MemberComponent } from '../member/member.component';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  marque: any;
  p: number = 1;
  constructor(private marqueService: MarqueService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMarque();
  }

  getAllMarque() {
    this.marqueService.getMarques().subscribe(
      (res: any) => {
        this.marque = res;
        console.log("voiture", this.marque);
      }
    )
  }

  deleteMarque(id: any) {
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
        this.marqueService.deleteMarque(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllMarque()
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
