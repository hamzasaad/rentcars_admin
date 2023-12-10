import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }
  client: any;
  p: number = 1;
  ngOnInit(): void {
    this.getAllClient()
  }
  getAllClient() {
    this.clientService.getclient().subscribe(
      (res: any) => {
        this.client = res;
        console.log("client", this.client);
      }
    )
  }

  deleteClient(id: any) {
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
        this.clientService.deleteclient(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllClient()
          })

        Swal.fire(
          'Deleted!',
          'client has been deleted.',
          'success'
        )

      }

    }

    )

  }

  acceptClient(id:any) {

    this.clientService.updateClient(id).subscribe(

      (res: any) => {
        console.log("accepted");
        this.getAllClient()
      })

  }
}
