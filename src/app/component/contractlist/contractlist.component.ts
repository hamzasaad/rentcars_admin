import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contractlist',
  templateUrl: './contractlist.component.html',
  styleUrls: ['./contractlist.component.css']
})
export class ContractlistComponent implements OnInit {
  p: number = 1;
  contract: any;
  constructor(private contractService: ContractService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDemande();
  }
  getAllDemande() {
    this.contractService.getAllcontract().subscribe(
      (res: any) => {
        this.contract = res;
        console.log("contract", this.contract);
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
        this.contractService.deleteContract(id).subscribe(

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


}
