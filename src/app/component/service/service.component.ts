import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: any;
  p: number = 1;
  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllService();
  }

  getAllService() {
    this.serviceService.getService().subscribe(
      (res: any) => {
        this.service = res;
        console.log("service", this.service);
      }
    )
  }

  deleteService(id: any) {
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
        this.serviceService.deleteService(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllService()
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
